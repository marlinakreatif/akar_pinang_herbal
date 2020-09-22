import { GET_BANNERS, GET_BIOGRAFI, GET_NEWS, GET_PRODUCTS } from "../constants/types";
import banners from "./dummies/banner-dummy.json";
import biografi from "./dummies/biografi-dummy.json";
import products from "./dummies/product-dummy.json";
import news from "./dummies/news-dummy.json";

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

export const getAllNews = () => {
  // Api Code will be here

  return {
    type: GET_NEWS,
    payload: news,
  };
};
export const getDashboardContent = () => (dispatch, getState) => {
  dispatch(getAllBanner());
  dispatch(getBiografi());
  dispatch(getAllProduct());
  dispatch(getAllNews());
};
