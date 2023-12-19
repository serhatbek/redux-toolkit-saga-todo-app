import { Select } from 'antd';
import './SelectButton.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  getCompletedTodoList,
  getFilterStatus,
  getIncompleteTodoList,
  getTodoList,
} from '../../redux/Todo/todoSlice';

const SelectButton = ({ options, defaultVal, ...props }) => {
  const [selectValue, setSelectValue] = useState(defaultVal);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setSelectValue((prev) => (prev = value));

    // console.log(selectValue);
    //     if (selectValue == 'All') {
    //       dispatch(getTodoList());
    //     }

    //     if (selectValue == 'Completed') {
    //       dispatch(getCompletedTodoList());
    //     }

    //     if (selectValue == 'Incomplete') {
    //       dispatch(getIncompleteTodoList());
    //     }
    //   };
  };

  useEffect(() => {
    dispatch(getFilterStatus(selectValue));
  }, [selectValue]);

  return (
    <Select
      popupClassName='ant-select-btn__list'
      className='ant-select-btn'
      defaultValue={defaultVal}
      value={selectValue}
      onChange={handleChange}
      options={options}
      style={{
        width: 120,
      }}
      {...props}
    />
  );
};

export default SelectButton;

SelectButton.propTypes = {
  options: PropTypes.any,
  defaultVal: PropTypes.string,
  props: PropTypes.any,
};
