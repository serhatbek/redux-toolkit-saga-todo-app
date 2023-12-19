import { Select } from 'antd';
import './SelectButton.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SelectButton = ({ options, defaultVal, ...props }) => {
  const [selectValue, setSelectValue] = useState(defaultVal);

  console.log(selectValue);

  const handleChange = (value) => {
    setSelectValue((prev) => (prev = value));
  };

  //   useEffect(() => {}, [selectValue]);

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
};
