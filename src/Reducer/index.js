import { combineReducers } from "redux";
import userReducer from "./user";
import post from "./postSlice"

export default combineReducers({
    user: userReducer,
    post : post
})