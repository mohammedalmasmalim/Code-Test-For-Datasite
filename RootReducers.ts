import { combineReducers } from "redux";
import usersReducer from "./UsersReducer";

const RootReducer = combineReducers({
  users: usersReducer
});

export default RootReducer;
