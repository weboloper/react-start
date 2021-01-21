import { combineReducers } from "redux";
import BlogReducer from "./blog/blogReducer";

const rootReducer = combineReducers({
  blog: BlogReducer,
});

export default rootReducer;
