import { GET_BANNERS, GET_BIOGRAFI, GET_PRODUCTS } from "../constants/types";
import banners from "./banner-dummy.json";
import biografi from "./biografi-dummy.json";
import products from "./product-dummy.json";

export const getAllBanner = () => {
  // api code will be here

  return {
    type: GET_BANNERS,
    payload: banners,
  };
};

export const getBiografi = () => {
  // Api Code will be here

  return {
    type: GET_BIOGRAFI,
    payload: biografi,
  };
};

export const getAllProduct = () => {
  // Api Code will be here

  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};

export const getDashboardContent = () => (dispatch, getState) => {
  dispatch(getAllBanner());
  dispatch(getBiografi());
  dispatch(getAllProduct());
};
