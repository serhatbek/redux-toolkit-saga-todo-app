import './Checkbox.scss';
import { Checkbox as AntdCheckbox } from 'antd';

const Checkbox = ({ label }) => {
  return <AntdCheckbox>{label}</AntdCheckbox>;
};

export default Checkbox;
