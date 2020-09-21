import { combineReducers } from "redux";
import { isMobileReducer } from "./dimensionReducer";

export default combineReducers({
  isMobile: isMobileReducer,
});
