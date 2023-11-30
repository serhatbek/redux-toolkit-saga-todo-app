import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import Sagas from './sagas';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

export default store;

sagaMiddleware.run(Sagas);
