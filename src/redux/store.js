import { createStore, compose, applyMiddleware } from "redux";
import createMiddleware from "redux-saga";
import reducer from "./reducers";
import { rootSaga } from "./sagas";

const sagaMiddleware = createMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadState) => {
  return createStore(
    reducer,
    preloadState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
};

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
