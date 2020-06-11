import {SALE_ACTIONS} from "../action/action.types";

const INITIAL_STATE = {
    sales : [],
    saleLoading : false,
    init : false
}


export default (state = INITIAL_STATE ,  action)=>{
    switch(action.type){

        case SALE_ACTIONS.SALE_LOADING : return{
            ...state,
            saleLoading : true,
            init : true
        }

        case SALE_ACTIONS.SALE_LOADING_DONE : return {
            ...state,
            saleLoading : false
        }

        case SALE_ACTIONS.GET_SALE : return {
            ...state,
            sales : action.payload
        }

        default : return state;
    }
}