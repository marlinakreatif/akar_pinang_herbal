import { combineReducers } from "redux";
import { isMobileReducer } from "./dimensionReducer";
import {
  getAllBannerReducer,
  getBiografiReducer,
} from "./clientDashboardReducer";

export default combineReducers({
  isMobile: isMobileReducer,
  banners: getAllBannerReducer,
  biografi: getBiografiReducer,
});
