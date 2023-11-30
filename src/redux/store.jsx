import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoReducer from './Todo/todoSlice';
import rootSaga from '../sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todoStore: todoReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

export default store;

sagaMiddleware.run(rootSaga);
