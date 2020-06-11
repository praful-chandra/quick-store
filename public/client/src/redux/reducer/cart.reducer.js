import { CART_ACTIONS } from "../action/action.types";

import {
  addToCart,
  removeItemFromCart,
  increaseItemCount,
  decreaseItemCount,
} from "../utils/cart.utl";

const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_CART:
      return {
        ...state,
        items: addToCart(state.items, action.payload),
      };

    case CART_ACTIONS.REMOVE_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case CART_ACTIONS.INCREMENT_CART:
      return {
        ...state,
        items: increaseItemCount(state.items, action.payload),
      }; 
    case CART_ACTIONS.DECREMENT_CART:
      return {
        ...state,
        items: decreaseItemCount(state.items, action.payload),
      };
    default:
      return state;
  }
};
