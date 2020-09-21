import { GET_BANNERS, GET_BIOGRAFI } from "../constants/types";

export const getAllBannerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BANNERS:
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
