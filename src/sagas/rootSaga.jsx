import { all } from 'redux-saga/effects';
import { todoSagas } from './todoSagas/todoSagas';

export default function* rootSaga() {
  yield all([...todoSagas]);
}
