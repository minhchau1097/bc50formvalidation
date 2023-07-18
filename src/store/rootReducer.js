import { combineReducers } from "redux";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    //child
    userReducer,
})

export default rootReducer;