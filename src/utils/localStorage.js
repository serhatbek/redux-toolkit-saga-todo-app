export const storeDataInLocalStorage = (todoList) => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};
