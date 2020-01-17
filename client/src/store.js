import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import apiMiddleware from "./middleware/api";

function configureStore(state) {
  return createStore(reducer, applyMiddleware(apiMiddleware));
}

export default configureStore;