import { all, delay, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { Types, Actions } from "./reducer";

function* sagaFetch() {
  try {
    yield put(Actions.sagaRequest());

    const response = yield call(
      axios.get,
      "https://api.github.com/users/eliezer-souza/repos"
    );

    yield delay(3000);

    yield put(Actions.sagaSuccess([response.data]));
  } catch (error) {
    yield put(Actions.sagaError());
  }
}

export default function* sagas() {
  yield all([yield takeLatest(Types.SAGA_SAGAFETCH, sagaFetch)]);
}
