import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

function Button({ text, type, onClick }) {
  const onClickButton = () => {
    onClick();
  };

  if (type === 'display') {
    return (
      <button
        className="button display"
        type="button"
        onClick={onClickButton}
      >
        {text}
      </button>
    );
  }
  if (type === 'archive') {
    return <button type="button">{text}</button>;
  }
  if (type === 'unarchive') {
    return <button type="button">{text}</button>;
  }
  if (type === 'remove') {
    return <button type="button">{text}</button>;
  }
  if (type === 'submit') {
    return (
      <button
        className="button submit"
        type="submit"
        onClick={onClickButton}
      >
        {text}
      </button>
    );
  }
  if (type === 'close') {
    return (
      <button
        className="button close"
        type="button"
        onClick={onClickButton}
      >
        <FontAwesomeIcon color="white" icon={faRemove} size="lg" />
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['display', 'submit', 'archive', 'unarchive', 'remove', 'close']).isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: '',
};

export default Button;
