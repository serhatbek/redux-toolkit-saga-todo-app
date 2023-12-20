import { useEffect } from 'react';
import {
  AddTodoItem,
  CongratModal,
  TodoFooter,
  TodoItem,
} from '../../components';
import './TodoContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoList } from '../../redux/Todo/todoSlice';

const TodoContainer = () => {
  const { todoList, filterStatus } = useSelector((state) => state.todoStore);
  const dispatch = useDispatch();

  const allItemsChecked = todoList.every((item) => item.checked === true);

  const listItems = () => {
    let displayItems;
    const allItemsList = todoList;
    const checkedList = todoList.filter((item) => item.checked === true);
    const unCheckedList = todoList.filter((item) => item.checked === false);

    if (filterStatus === 'All') {
      displayItems = allItemsList;
    }

    if (filterStatus === 'Completed') {
      displayItems = checkedList;
    }

    if (filterStatus === 'Incomplete') {
      displayItems = unCheckedList;
    }
    return displayItems;
  };

  const listItemsToShow = listItems();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <div className='todo-container container flex flex--col flex--align flex--justify'>
      <h2>Tasks List</h2>
      <AddTodoItem />
      <div className='box background'>
        {listItemsToShow?.length > 0 ? (
          listItemsToShow?.map((todo) => {
            return <TodoItem key={todo?.id} todoClass='flex' todo={todo} />;
          })
        ) : (
          <p className='empty'>Add new tasks...</p>
        )}
      </div>
      <TodoFooter />
      {allItemsChecked && <CongratModal />}
    </div>
  );
};

export default TodoContainer;
