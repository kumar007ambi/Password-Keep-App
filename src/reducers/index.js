import { combineReducers } from "redux";
import { passwordReducer } from "./passwordReducer";


export default combineReducers({
    password: passwordReducer,
})