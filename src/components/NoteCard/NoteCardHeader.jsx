import React from 'react';
import PropTypes from 'prop-types';
import showFormattedDate from '../../utils/date-time';

function NoteCardHeader({ title, date }) {
  return (
    <div className="noteCardHeader">
      <h3 className="noteCardTitle">{title}</h3>
      <p className="noteCardDate">{showFormattedDate(date)}</p>
    </div>
  );
}

NoteCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NoteCardHeader;
