import './FloatLabel.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  const labelClass =
    focus || (value && value.length !== 0) ? 'label label-float' : 'label';

  return (
    <div
      className='float-label'
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;

FloatLabel.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  value: PropTypes.any,
};
