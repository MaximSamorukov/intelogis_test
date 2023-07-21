import { all, takeEvery } from "redux-saga/effects";

export function* getPolyline() {
  console.log("Hello Sagas!");
}

export function* watchGetPolyline() {
  yield takeEvery("GET_POLYLINE", getPolyline);
}

export default function* rootSaga() {
  yield all([watchGetPolyline()]);
}
