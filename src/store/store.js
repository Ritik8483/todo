import { rootReducers } from "../reducer/rootReducer";
import { createStore } from "redux";
const store = createStore(rootReducers);
export default store;
