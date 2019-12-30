import { createStore } from "redux";
import reducer from "./reducers";

function configureStore(state = { rotating: true }) {
  return createStore(reducer,state);
}

export default configureStore;