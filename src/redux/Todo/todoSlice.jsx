import { createSlice } from '@reduxjs/toolkit';
import { storeDataInLocalStorage } from '../../utils/localStorage';

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
};

const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
