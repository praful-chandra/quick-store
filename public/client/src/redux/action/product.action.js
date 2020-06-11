import axios from "axios";

import {PRODUCT_ACTIONS} from "./action.types";

const productLoading = () =>({
    type : PRODUCT_ACTIONS.PRODUCT_LOADING
})
const productLoadingDone = () =>({
    type : PRODUCT_ACTIONS.PRODUCT_LOADING_DONE
})

const getProducts = (products,append) =>({
    type : PRODUCT_ACTIONS.GET_PRODUCTS,
    payload : {products,append}
})

export const getProductsAsync = (options,append) =>async dispatch =>{
    dispatch(productLoading());

    try{              
        const products = await axios.post("/api/get/products",options);
        dispatch(getProducts(products.data,append));
    }
    catch (err){
        console.log(err);        
    }
    finally{
        dispatch(productLoadingDone());
  
    }
}