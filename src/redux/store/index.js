import rootReducer from "./../Reducers/index";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
