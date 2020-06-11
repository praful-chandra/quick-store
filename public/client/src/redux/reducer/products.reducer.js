import {PRODUCT_ACTIONS} from "../action/action.types";

import {getProducts} from "../utils/product.utils";

const INITIAL_STATE = {
    products : [],
    productLoading : false,
    init : false,
    totalCount : 0,
 
}

export default (state = INITIAL_STATE , action)=>{

    switch(action.type){

        case PRODUCT_ACTIONS.PRODUCT_LOADING :return {
            ...state,
            productLoading : true,
            init : true
        }

        case PRODUCT_ACTIONS.PRODUCT_LOADING_DONE :return {
            ...state,
            productLoading : false,
        }

        case PRODUCT_ACTIONS.GET_PRODUCTS :return {
            ...state,
            ...getProducts(state.products,action.payload)
        }

        default : return state
    }


}