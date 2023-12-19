import { put, takeLatest, fork } from 'redux-saga/effects';

import {
  addTodo,
  setAddTodo,
  deleteTodo,
  setDeleteTodo,
  editTodo,
  setEditTodo,
  checkedTodo,
  setCheckedTodo,
  getTodoList,
  setTodoList,
  getCompletedTodoList,
  setCompletedTodoList,
  getIncompleteTodoList,
  setIncompleteTodoList,
  clearAll,
  setClearAll,
} from '../../redux/Todo/todoSlice';

function* onAddTodoAsync(action) {
  yield put(setAddTodo(action.payload));
}

function* onEditTodoAsync(action) {
  yield put(setEditTodo(action.payload));
}

function* onCheckedTodoAsync(action) {
  yield put(setCheckedTodo(action.payload));
}

function* onGetTodoListAsync() {
  yield put(setTodoList());
}

function* onGetCompletedTodoListAsync() {
  yield put(setCompletedTodoList());
}

function* onGetIncompleteTodoListAsync() {
  yield put(setIncompleteTodoList());
}

function* onDeleteTodoAsync(action) {
  yield put(setDeleteTodo(action.payload));
}

function* onClearAllAsync() {
  yield put(setClearAll());
}

function* watchAddTodo() {
  yield takeLatest(addTodo.type, onAddTodoAsync);
}

function* watchEditTodo() {
  yield takeLatest(editTodo.type, onEditTodoAsync);
}

function* watchCheckedTodo() {
  yield takeLatest(checkedTodo.type, onCheckedTodoAsync);
}

function* watchSetTodoList() {
  yield takeLatest(getTodoList.type, onGetTodoListAsync);
}

function* watchCompletedTodoList() {
  yield takeLatest(getCompletedTodoList.type, onGetCompletedTodoListAsync);
}

function* watchIncompleteTodoList() {
  yield takeLatest(getIncompleteTodoList.type, onGetIncompleteTodoListAsync);
}

function* watchDeleteTodo() {
  yield takeLatest(deleteTodo.type, onDeleteTodoAsync);
}

function* watchClearAll() {
  yield takeLatest(clearAll.type, onClearAllAsync);
}

export const todoSagas = [
  fork(watchSetTodoList),
  fork(watchAddTodo),
  fork(watchEditTodo),
  fork(watchCheckedTodo),
  fork(watchCompletedTodoList),
  fork(watchIncompleteTodoList),
  fork(watchDeleteTodo),
  fork(watchClearAll),
];
