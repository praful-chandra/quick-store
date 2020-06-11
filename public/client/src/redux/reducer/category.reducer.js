import { CATEGORY_ACTIONS } from "../action/action.types";

const INITIAL_STATE = {
  categories: [],
  init: false,
  categoryLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORY_ACTIONS.CATEGORY_LOADING:
      return {
        ...state,
        categoryLoading: true,
        init: true,
      };
    case CATEGORY_ACTIONS.CATEGORY_LOADING_DONE:
      return {
        ...state,
        categoryLoading: false,
      };
    case CATEGORY_ACTIONS.GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};
