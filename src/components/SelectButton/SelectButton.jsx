import { Select } from 'antd';
import './SelectButton.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SelectButton = ({ options }) => {
  const [selectValue, setSelectValue] = useState('All');

  const handleChange = (value) => {
    setSelectValue((prev) => (prev = value));
  };

  useEffect(() => {}, [selectValue]);

  return (
    <Select
      popupClassName='ant-select-btn__list'
      className='ant-select-btn'
      defaultValue='All'
      onChange={handleChange}
      options={options}
      style={{
        width: 120,
      }}
    />
  );
};

export default SelectButton;

SelectButton.propTypes = {
  options: PropTypes.any,
};
