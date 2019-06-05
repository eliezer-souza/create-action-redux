import { all, delay, call, takeLatest, put } from "redux-saga/effects";
import { Types, Actions } from "./reducer";

function* sagaFetch() {
  try {
    yield put(Actions.sagaRequest());

    const response = yield call(
      fetch,
      "https://api.github.com/users/eliezer-souza/repos"
    );

    const responseJson = yield response.json();

    yield delay(3000);

    yield put(Actions.sagaSuccess([responseJson]));
  } catch (error) {
    yield put(Actions.sagaError());
  }
}

export default function* sagas() {
  yield all([yield takeLatest(Types.SAGA_SAGAFETCH, sagaFetch)]);
}
