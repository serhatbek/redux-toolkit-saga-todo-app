import './Checkbox.scss';
import PropTypes from 'prop-types';
import { Checkbox as AntdCheckbox } from 'antd';

const Checkbox = ({ label, ...props }) => {
  return <AntdCheckbox {...props}>{label}</AntdCheckbox>;
};

export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string,
  props: PropTypes.any,
};
