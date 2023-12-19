import { createSlice } from '@reduxjs/toolkit';
import { storeDataInLocalStorage } from '../../utils/localStorage';

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
  filterStatus: 'All',
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
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
      storeDataInLocalStorage(state.todoList);
    },
    editTodo: (todo) => {
      return todo;
    },
    setEditTodo: (state, action) => {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      storeDataInLocalStorage(state.todoList);
    },
    checkedTodo: (todo) => {
      return todo;
    },
    setCheckedTodo: (state, action) => {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      storeDataInLocalStorage(state.todoList);
    },
    getTodoList: () => {},
    setTodoList: (state) => {
      state.todoList = JSON.parse(localStorage.getItem('todoList'));
      storeDataInLocalStorage(state.todoList);
    },
    getFilterStatus: (status) => {
      return status;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
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
  editTodo,
  setEditTodo,
  checkedTodo,
  setCheckedTodo,
  clearAll,
  setClearAll,
  getTodoList,
  setTodoList,
  getFilterStatus,
  setFilterStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
