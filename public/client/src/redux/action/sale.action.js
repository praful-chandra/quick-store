import axios from "axios";

import { SALE_ACTIONS } from "./action.types";

const saleLoading = () => ({
  type: SALE_ACTIONS.SALE_LOADING,
});

const saleLoadingDone = () => ({
  type: SALE_ACTIONS.SALE_LOADING_DONE,
});

const getSale = (sales) => ({
  type: SALE_ACTIONS.GET_SALE,
  payload: sales,
});

export const getSaleAsync = (options) => async (dispatch) => {
  dispatch(saleLoading());

  try {
    const salesData = (await axios.post("/api/get/sale", options)).data;

    dispatch(getSale(salesData));
  } catch (err) {
    alert("error");
  } finally {
    dispatch(saleLoadingDone());
  }
};
