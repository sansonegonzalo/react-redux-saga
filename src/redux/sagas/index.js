import { all } from 'redux-saga/effects';
import characters from './characters';

export default function* rootSaga() {
  yield all([characters()]);
}
