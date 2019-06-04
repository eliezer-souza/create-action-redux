import React from "react";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import AppSimple from "./examples/simple";
import simpleReducers from "./examples/simple/reducer";
import AppSaga from "./examples/saga";
import sagaReducers from "./examples/saga/reducer";
import sagas from "./examples/saga/saga";

const reducers = combineReducers({
  simple: simpleReducers,
  saga: sagaReducers
});

const sagaMiddleware = createSagaMiddleware();
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer =
  devTools && process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(sagaMiddleware),
        devTools
      )
    : compose(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <AppSimple />
    <AppSaga />
  </Provider>,
  document.getElementById("root")
);
