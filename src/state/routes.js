import { createSlice } from "@reduxjs/toolkit";
import { routes } from "../constants";

export const routesSlice = createSlice({
  name: "routes",
  initialState: routes,
  reducers: {},
});

export default routesSlice.reducer;
