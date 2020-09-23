import { combineReducers } from "redux";
import { isMobileReducer } from "./dimensionReducer";
import {
  getAllBannerReducer,
  getBiografiReducer,
  getAllProductReducer,
  getAllNewsReducer,
  getTestimoniReducer,
} from "./clientDashboardReducer";

export default combineReducers({
  isMobile: isMobileReducer,
  banners: getAllBannerReducer,
  biografi: getBiografiReducer,
  products: getAllProductReducer,
  news: getAllNewsReducer,
  testimoni_comment: getTestimoniReducer,
});
