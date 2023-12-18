import './Checkbox.scss';
import { Checkbox as AntdCheckbox } from 'antd';

const Checkbox = ({ label, ...props }) => {
  return <AntdCheckbox {...props}>{label}</AntdCheckbox>;
};

export default Checkbox;
