import {
  GET_BANNERS,
  GET_BIOGRAFI,
  GET_PRODUCTS,
  GET_NEWS,
  GET_TESTIMONY,
} from "../constants/types";

export const getAllBannerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BANNERS:
      return action.payload;

    default:
      return state;
  }
};

export const getAllProductReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
};

export const getAllNewsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NEWS:
      return action.payload;

    default:
      return state;
  }
};

export const getBiografiReducer = (state = null, action) => {
  switch (action.type) {
    case GET_BIOGRAFI:
      return action.payload;

    default:
      return state;
  }
};

export const getTestimoniReducer = (state = null, action) => {
  switch (action.type) {
    case GET_TESTIMONY:
      return action.payload;

    default:
      return state;
  }
};
