import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import routeReducer from "./route";
import routesReducer from "./routes";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore(
  {
    reducer: {
      route: routeReducer,
      routes: routesReducer,
    },
  },
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
