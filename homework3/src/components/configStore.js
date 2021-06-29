import { createStore } from "redux";
import reducer from "./addVoca";

const rootReducer = reducer;

const store = createStore(rootReducer);
console.log(store.getState());

export default store;
