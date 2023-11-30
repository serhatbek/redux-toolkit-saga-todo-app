import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import './TodoFooter.scss';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../../redux/Todo/actions';

const TodoFooter = () => {
  const { todoList } = useSelector((state) => state.allTodoItems);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(deleteAll());
  };

  return (
    <div className='todo-footer flex flex--align background'>
      <p>{todoList?.length} items left</p>
      <Button btnAction={handleClearAll}>Clear All</Button>
    </div>
  );
};

export default TodoFooter;
