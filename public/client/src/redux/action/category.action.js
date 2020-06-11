import axios from "axios";

import { CATEGORY_ACTIONS } from "./action.types";

const categoryLoading = () => ({
  type: CATEGORY_ACTIONS.CATEGORY_LOADING,
});
const categoryLoadingDone = () => ({
  type: CATEGORY_ACTIONS.CATEGORY_LOADING_DONE,
});
const getCategory = (categories) => ({
  type: CATEGORY_ACTIONS.GET_CATEGORY,
  payload: categories,
});

export const getCategoryAsync = () => async (dispatch) => {
  dispatch(categoryLoading());

  try {
        let categoryList =  (await axios.post("/api/get/categorieswithProducts")).data;   
       
        dispatch(getCategory(categoryList))
        
  } 
  catch (err) {

  } 
  finally {
    dispatch(categoryLoadingDone());
  }
};
