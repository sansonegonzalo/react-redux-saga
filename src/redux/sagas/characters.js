import { pull, call, takeLast, takeLatest, put } from 'redux-saga/effects';
import {
  START_GET_CHARACTERS,
  SUCCESS_GET_POKEMONS,
} from '../actions/characters';
import apiCall from '../api';

export function* getCharacters({ payload }) {
  try {
    const results = yield call(
      apiCall,
      'get',
      'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10'
    );
    yield put({ type: SUCCESS_GET_POKEMONS, results });
  } catch (err) {}
}

// Watchers
export default function* characters() {
  yield takeLatest(START_GET_CHARACTERS, getCharacters);
}
