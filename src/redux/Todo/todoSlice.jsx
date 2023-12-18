import { createSlice } from '@reduxjs/toolkit';
import { storeDataInLocalStorage } from '../../utils/localStorage';

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
};
console.log(initialState.todoList);
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
} = todoSlice.actions;
export default todoSlice.reducer;
