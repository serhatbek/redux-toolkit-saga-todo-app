import './Input.scss';
import { Input as AntdInput } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FloatLabel from '../FloatLabel/FloatLabel';

const Input = ({ value, placeholder, className, ...props }) => {
  return (
    <FloatLabel
      label={placeholder}
      name={placeholder}
      value={value}
      className={classNames(className)}
    >
      <AntdInput {...props} value={value}></AntdInput>
    </FloatLabel>
  );
};

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};
