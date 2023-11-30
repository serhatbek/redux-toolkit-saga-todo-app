import { createSlice } from '@reduxjs/toolkit';
import { storeDataInLocalStorage } from '../../utils/localStorage';

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
};

const todoSlice = createSlice({
  name: 'todoStore',
  initialState,
  reducers: {
    addTodo: (todo) => {
      return todo;
    },
    setAddTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
      storeDataInLocalStorage(state.todoList);
    },
    deleteTodo: (id) => {
      return id;
    },
    setDeleteTodo: (state, action) => {
      state.todoList.filter((item) => item.id !== action.payload);
      storeDataInLocalStorage(state.todoList);
    },
    clearAll: () => {},
    setClearAll: (state) => {
      state.todoList = [];
      storeDataInLocalStorage([]);
    },
  },
});

export const {
  addTodo,
  setAddTodo,
  deleteTodo,
  setDeleteTodo,
  clearAll,
  setClearAll,
} = todoSlice.actions;
export default todoSlice.reducer;
