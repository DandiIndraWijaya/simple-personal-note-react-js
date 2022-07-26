import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Input({
  name, value, onChange, type, placeholder, limit,
}) {
  if (type === 'text') {
    if (limit !== 0) {
      return (
        <div className="input limit">
          <input
            className="inputText"
            type="text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e) => {
              if (e.target.value.length <= limit) {
                onChange(e);
              }
            }}
            spellCheck={false}
          />
          <div className="limitNumber">
            (
            {limit - value.length}
            )
          </div>
        </div>
      );
    }
  } if (type === 'textarea') {
    return (
      <div className="input">
        <textarea
          className="inputTextarea"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          spellCheck={false}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'textarea']),
  limit: PropTypes.number,
};

Input.defaultProps = {
  type: 'text',
  limit: 0,
};

export default Input;
