import { combineReducers } from "redux";
import reportReducer from "../features/reportsSlice";

const rootReducer = combineReducers({
    reports: reportReducer
})

export default rootReducer