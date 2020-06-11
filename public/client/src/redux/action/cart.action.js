import {CART_ACTIONS} from "./action.types";


export const addToCart = item =>({
    type : CART_ACTIONS.ADD_CART,
    payload : item
})

export const removeFromCart = id =>({
    type : CART_ACTIONS.REMOVE_CART,
    payload : id
})

export const incrementCart = id=>({
    type : CART_ACTIONS.INCREMENT_CART,
    payload : id
})

export const decrementCart = id =>({
    type : CART_ACTIONS.DECREMENT_CART,
    payload : id
})