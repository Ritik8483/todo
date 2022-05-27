import { changeHandler } from "./reducer";
import { combineReducers } from "redux";
// import toDoReducer from '../reducer/reducer';
import todoSlice from "./reducer";
export const rootReducers=combineReducers({
    changeHandler,
    todo:todoSlice
})