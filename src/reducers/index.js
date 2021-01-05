import { combineReducers } from "redux";
import authReducer from "./Auth";
import coursesReducer from "./Courses";

const rootReducer = combineReducers({
  authReducer,
  coursesReducer,
});

export default rootReducer;
