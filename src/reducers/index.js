import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import questionReducer from "./questionsReducer";
import submissionReducer from "./submissionReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  questionsReducer: questionReducer,
  submissionReducer: submissionReducer,
});
