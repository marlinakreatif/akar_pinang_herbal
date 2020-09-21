const { SET_SCREEN_SIZE } = require("../constants/types");

export const setMobileScreen = (isMobile) => {
  return { type: SET_SCREEN_SIZE, payload: isMobile };
};
