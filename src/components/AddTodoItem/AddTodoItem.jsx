import './AddTodoItem.scss';
import { Button, Input } from '../../components';
import { IoMdAddCircle } from 'react-icons/io';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodo } from '../../redux/Todo/todoSlice';

const AddTodoItem = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(
        addTodo({
          id: nanoid(),
          text: inputValue,
          checked: false,
        })
      );
    }
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className='add-todo background'>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder='Add Task'
      />
      <Button btnAction={handleAddTodo} iconLeft={<IoMdAddCircle />}>
        ADD
      </Button>
    </div>
  );
};

export default AddTodoItem;
