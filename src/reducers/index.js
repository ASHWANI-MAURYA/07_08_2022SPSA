import { combineReducers } from "redux";
import userOptionReducer from "./useroptions";

const reducers = combineReducers({
  useroption: userOptionReducer
});
export default reducers;
