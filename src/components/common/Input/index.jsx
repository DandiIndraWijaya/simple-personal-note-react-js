import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Input({
  name, value, onChange, type, placeholder, limit,
}) {
  const onChangeSearch = (e) => {
    onChange(e.target.value);
  };

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
  }

  if (type === 'search') {
    return (
      <div className="input search">
        <FontAwesomeIcon icon={faSearch} />
        <input
          className="inputSearch"
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={onChangeSearch}
          spellCheck={false}
        />
      </div>
    );
  }

  if (type === 'textarea') {
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
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'search', 'textarea']),
  limit: PropTypes.number,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  limit: 0,
  value: '',
};

export default Input;
