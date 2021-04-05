import { createStore, compose } from "redux";
import rootReducer from "./reducers/index";

const store = compose(window.devToolsExtension && window.devToolsExtension())(
  createStore
)(rootReducer);

export default store;
