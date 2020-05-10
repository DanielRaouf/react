import { combineReducers } from "redux";
import user, { IUserState } from "./user.reducer";

const reducers = {
  user,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
