import counterReducer from "./addsub";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;