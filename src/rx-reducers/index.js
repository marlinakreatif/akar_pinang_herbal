import { combineReducers } from "redux";
import { isMobileReducer } from "./dimensionReducer";
import {
  getAllBannerReducer,
  getBiografiReducer,
  getAllProductReducer,
  getAllNewsReducer,
} from "./clientDashboardReducer";

export default combineReducers({
  isMobile: isMobileReducer,
  banners: getAllBannerReducer,
  biografi: getBiografiReducer,
  products: getAllProductReducer,
  news: getAllNewsReducer,
});
