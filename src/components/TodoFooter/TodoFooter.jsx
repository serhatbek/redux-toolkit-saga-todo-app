import { useSelector } from 'react-redux';
import { Button, SelectButton } from '../../components';
import './TodoFooter.scss';
import { useDispatch } from 'react-redux';
import { clearAll } from '../../redux/Todo/todoSlice';

const TodoFooter = () => {
  const { todoList } = useSelector((state) => state.todoStore);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  const selectOptions = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'Completed',
      label: 'Completed',
    },
    {
      value: 'Incomplete',
      label: 'Incomplete',
    },
  ];

  return (
    <div className='todo-footer flex flex--align background'>
      <p>{todoList?.length} items left</p>
      <Button btnAction={handleClearAll}>Clear All</Button>
      <SelectButton options={selectOptions} />
    </div>
  );
};

export default TodoFooter;
