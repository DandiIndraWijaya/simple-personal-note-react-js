import React from 'react';
import PropTypes from 'prop-types';

function Input({
  name, value, onChange, type, placeholder,
}) {
  if (type === 'text') {
    return <div className="input"><input className="inputText" type="text" placeholder={placeholder} name={name} value={value} onChange={onChange} /></div>;
  } if (type === 'textarea') {
    return <div className="input"><textarea className="inputTextarea" name={name} placeholder={placeholder} value={value} onChange={onChange} /></div>;
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'textarea']),
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
