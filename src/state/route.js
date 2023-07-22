import { createSlice } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
  name: "route",
  initialState: {
    selectedRoute: null,
    selectedCoords: null,
    selectedPolyline: null,
  },
  reducers: {
    selectRoute: (state, action) => {
      state.selectedRoute = action.payload?.key;
      state.selectedCoords = action.payload?.points;
    },
    deSelectRoute: (state) => {
      state.selectedRoute = null;
      state.selectedCoords = null;
      state.selectedPolyline = null;
    },
    setPolyline: (state, action) => {
      state.selectedPolyline = action.payload;
    },
  },
});

export const { selectRoute, deSelectRoute, setPolyline } = routeSlice.actions;

export default routeSlice.reducer;
