import { put, takeLatest, fork, call } from 'redux-saga/effects';
import { storeDataInLocalStorage } from '../../utils/localStorage';

import {
  addTodo,
  setAddTodo,
  deleteTodo,
  setDeleteTodo,
  editTodo,
  setEditTodo,
  clearAll,
  setClearAll,
} from '../../redux/Todo/todoSlice';

function* onAddTodoAsync(action) {
  yield put(setAddTodo(action.payload));
  const storedData = JSON.parse(localStorage.getItem('todoList'));
  const updatedData = [...storedData, action.payload];
  localStorage.setItem('todoList', JSON.stringify(updatedData));
}

function* onEditTodoAsync(action) {
  yield put(setEditTodo(action.payload));
  const storedData = JSON.parse(localStorage.getItem('todoList'));
  const updatedData = storedData.map((item) =>
    item.id === action.payload.id ? action.payload : item
  );
  localStorage.setItem('todoList', JSON.stringify(updatedData));
}

function* onDeleteTodoAsync(action) {
  yield put(setDeleteTodo(action.payload));
  const storedData = JSON.parse(localStorage.getItem('todoList'));
  const updatedData = storedData.filter((item) => item.id !== action.payload);
  localStorage.setItem('todoList', JSON.stringify(updatedData));
}

function* onClearAllAsync() {
  yield put(setClearAll());
  localStorage.removeItem('todoList');
  storeDataInLocalStorage([]);
}

function* watchAddTodo() {
  yield takeLatest(addTodo.type, onAddTodoAsync);
}

function* watchEditTodo() {
  yield takeLatest(editTodo.type, onEditTodoAsync);
}

function* watchDeleteTodo() {
  yield takeLatest(deleteTodo.type, onDeleteTodoAsync);
}

function* watchClearAll() {
  yield takeLatest(clearAll.type, onClearAllAsync);
}

export const todoSagas = [
  fork(watchAddTodo),
  fork(watchDeleteTodo),
  fork(watchClearAll),
  fork(watchEditTodo),
];
