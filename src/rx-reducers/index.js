import { combineReducers } from "redux";
import { isMobileReducer } from "./dimensionReducer";
import { getAllBannerReducer } from "./clientDashboardReducer";

export default combineReducers({
  isMobile: isMobileReducer,
  banners: getAllBannerReducer,
});
