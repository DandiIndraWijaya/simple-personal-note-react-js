import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Button({ text, type, onClick }) {
  const onClickButton = () => {
    onClick();
  };

  if (type === 'display') {
    return <button className="button display" type="button" onClick={onClickButton}>{text}</button>;
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
    return <button type="button">{text}</button>;
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['display', 'submit', 'archive', 'unarchive', 'remove']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
