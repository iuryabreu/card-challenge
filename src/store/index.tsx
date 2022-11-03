import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./ducks";

const devTools = "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"

const composeEnhancers =
  (window[devTools] as typeof compose) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
