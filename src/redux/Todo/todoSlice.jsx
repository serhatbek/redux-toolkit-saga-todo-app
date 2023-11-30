import { createSlice } from '@reduxjs/toolkit';
import { storeDataInLocalStorage } from '../../utils/localStorage';

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
};

const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (todo) => {
      return todo;
    },
    setTodo: (state, action) => {
      state.todoList = [...todoList, action.payload];
    },
    deleteTodo: (id) => {
      return id;
    },
    setDeleteTodo: (state, action) => {
      state.todoList.filter((item) => item.id !== action.payload);
    },
    setClearAll: (state) => {
      state.todoList = [];
    },
  },
});

export default todoSlice.reducer;
