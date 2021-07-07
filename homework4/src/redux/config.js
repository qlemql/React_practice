import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import user from "./modules/user";
import post from "./modules/post";
import image from "./modules/image";

export const history = createBrowserHistory();

// 리듀서 묶기
const rootReducer = combineReducers({
  user: user,
  post: post,
  image: image,
  router: connectRouter(history),
});

// middleware
// 주로 비동기 작업할때 많이 사용
// 리듀서로 넘기기전에 액션을 관리할 수 있다.
const middlewares = [thunk.withExtraArgument({ history: history })];
const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
