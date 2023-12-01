import { AddTodoItem, TodoFooter, TodoItem } from '../../components';
import './TodoContainer.scss';
import { useSelector } from 'react-redux';

const TodoContainer = () => {
  const { todoList } = useSelector((state) => state.todoStore);

  return (
    <div className='todo-container container flex flex--col flex--align flex--justify'>
      <h2>Tasks List</h2>
      <AddTodoItem />
      <div className='box background'>
        {todoList?.length > 0 ? (
          todoList?.map((todo) => {
            return <TodoItem key={todo.id} todoClass='flex' todo={todo} />;
          })
        ) : (
          <p className='empty'>Add new tasks...</p>
        )}
      </div>
      <TodoFooter />
    </div>
  );
};

export default TodoContainer;
