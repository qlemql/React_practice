import { createStore, applyMiddleware } from "redux";
import reducer from "./addVoca";
import thunk from "redux-thunk";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = reducer;

const store = createStore(rootReducer, enhancer);

export default store;
