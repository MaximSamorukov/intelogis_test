import { all, takeEvery, put } from "redux-saga/effects";
import { getRoute } from "../http-services";
import { routes } from "../constants";
import { setPolyline } from "./route";

export function* getPolyline(info) {
  const { data } = yield getRoute(routes[0]);
  yield put(setPolyline(data));
}

export function* watchGetPolyline() {
  yield takeEvery("GET_POLYLINE", getPolyline);
}

export default function* rootSaga() {
  yield all([watchGetPolyline()]);
}
