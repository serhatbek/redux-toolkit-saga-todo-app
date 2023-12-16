import { Select } from 'antd';
import './SelectButton.scss';
// import Select from 'react-select';
Select;

const SelectButton = ({ options }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
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
