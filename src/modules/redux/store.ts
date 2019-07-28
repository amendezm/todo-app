import { createStore, compose } from "redux";

import { reducer } from "../todos/redux/reducer";

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export { store };
