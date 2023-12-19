import { Select } from 'antd';
import './SelectButton.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getFilterStatus } from '../../redux/Todo/todoSlice';

const SelectButton = ({ options, defaultVal, ...props }) => {
  const [selectValue, setSelectValue] = useState(defaultVal);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setSelectValue((prev) => (prev = value));
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
