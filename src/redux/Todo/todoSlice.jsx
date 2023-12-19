import { createSlice } from '@reduxjs/toolkit';
import { storeDataInLocalStorage } from '../../utils/localStorage';

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
  completedTodoList: [],
  incompleteTodoList: [],
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
      const allTodos = JSON.parse(localStorage.getItem('todoList'));
      storeDataInLocalStorage(allTodos);
      return { ...state, todoList: allTodos };
    },
    getCompletedTodoList: () => {},
    setCompletedTodoList: (state) => {
      const completedTodos = state.todoList.filter(
        (item) => item.checked === true
      );
      storeDataInLocalStorage(completedTodos);
      return { ...state, completedTodoList: completedTodos };
    },
    getIncompleteTodoList: () => {},
    setIncompleteTodoList: (state) => {
      const incompleteTodos = state.todoList.filter(
        (item) => item.checked === false
      );
      storeDataInLocalStorage(incompleteTodos);
      return { ...state, incompleteTodoList: incompleteTodos };
    },
    getFilterStatus: (status) => {
      return status;
    },
    setFilterStatus: (state, action) => {
      return { ...state, filterStatus: action.payload };
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
  getCompletedTodoList,
  setCompletedTodoList,
  getIncompleteTodoList,
  setIncompleteTodoList,
  clearAll,
  setClearAll,
  getTodoList,
  setTodoList,
  getFilterStatus,
  setFilterStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
