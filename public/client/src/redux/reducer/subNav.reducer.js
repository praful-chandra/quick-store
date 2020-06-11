import {SUB_NAV_ACTIONS} from "../action/action.types";

const INITIAL_STATE = {
    tab : 1
}


export default (state = INITIAL_STATE,action)=>{

    switch(action.type){

        case SUB_NAV_ACTIONS.CHANGE_TAB : return{
            ...state,
            tab : action.payload
        }

        default : return state;
    }
}