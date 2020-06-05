import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./StreamReducer";

export default combineReducers({
  auth: AuthReducer,
  form: formReducer,
  stream: streamReducer,
});
