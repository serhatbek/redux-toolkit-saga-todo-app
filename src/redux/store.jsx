import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoReducer from './Todo/todoSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  // },
});

export default store;

// sagaMiddleware.run();
