import {CAMPAIGN_ACTIONS} from "../action/action.types";

const INITIAL_STATE = {
    campaigns : [],
    campaignLoading : false,
    init : false
}

export default (state = INITIAL_STATE , action)=>{

    switch(action.type){

        case CAMPAIGN_ACTIONS.CAMPAIGN_LOADING : return{
            ...state,
            campaignLoading : true,
            init:true
        }

        case CAMPAIGN_ACTIONS.CAMPAIGN_LOADING_DONE : return {
            ...state,
            campaignLoading: false
        }

        case CAMPAIGN_ACTIONS.GET_CAMPAIGN : return {
            ...state,
            campaigns : action.payload
        }


        default : return state;
    }

}