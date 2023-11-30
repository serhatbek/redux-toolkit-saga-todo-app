export const storeDataInLocalStorage = (todoList) => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

export const storedTodoData = localStorage.getItem('todoList');
