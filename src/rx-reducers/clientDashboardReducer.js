import { GET_BANNERS } from "../constants/types";

export const getAllBannerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BANNERS:
      return action.payload;

    default:
      return state;
  }
};
