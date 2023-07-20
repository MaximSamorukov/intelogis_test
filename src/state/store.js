import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./route";
import routesReducer from "./routes";

export default configureStore({
  reducer: {
    route: routeReducer,
    routes: routesReducer,
  },
});
