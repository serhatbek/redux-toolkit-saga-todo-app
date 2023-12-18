import './TodoItem.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button, Checkbox, Input } from '../../components';
import { RiDeleteBin6Fill, RiEditBoxFill, RiEdit2Fill } from 'react-icons/ri';
import { checkedTodo, deleteTodo, editTodo } from '../../redux/Todo/todoSlice';

const TodoItem = ({ todo, todoClass }) => {
  const { text, id } = todo;
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(text);
  const [itemChecked, setItemChecked] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    setName(text);
    if (edit) {
      dispatch(
        editTodo({
          ...todo,
          text: name,
        })
      );
    }
    setEdit(!edit);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClickOutside = (e) => {
    if (edit && e.target.tagName !== 'INPUT') {
      handleEdit();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  const handleItemChecked = (e) => {
    setItemChecked((prev) => (prev = e.target.checked));
    // console.log(itemChecked);
  };

  useEffect(() => {
    dispatch(
      checkedTodo({
        ...todo,
        checked: itemChecked,
      })
    );
  }, [itemChecked]);

  useEffect(() => {
    if (edit) {
      document.addEventListener('mousedown', handleClickOutside);

      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [edit]);

  return (
    <div className={`todo-item ${todoClass ? todoClass : ''}`}>
      {edit ? (
        <Input
          value={name}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
      ) : (
        <Checkbox onChange={handleItemChecked} label={text} />
      )}
      <div className='todo-item__actions flex'>
        <Button
          btnAction={handleEdit}
          iconLeft={edit ? <RiEdit2Fill /> : <RiEditBoxFill />}
        ></Button>
        <Button
          btnAction={() => handleDelete(id)}
          iconLeft={<RiDeleteBin6Fill />}
        ></Button>
      </div>
    </div>
  );
};

export default TodoItem;
