import React from 'react';
import PropTypes from 'prop-types';

function NoteCardBody({ note }) {
  return <div className="noteCardBody">{note}</div>;
}

NoteCardBody.propTypes = {
  note: PropTypes.string.isRequired,
};

export default NoteCardBody;
