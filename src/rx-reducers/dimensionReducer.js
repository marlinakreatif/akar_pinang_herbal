import { SET_SCREEN_SIZE } from "../constants/types";

export const isMobileReducer = (state = false, action) => {
  switch (action.type) {
    case SET_SCREEN_SIZE:
      return action.payload;

    default:
      return state;
  }
};
