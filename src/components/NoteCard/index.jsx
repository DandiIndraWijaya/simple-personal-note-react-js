import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import NoteCardBody from './NoteCardBody';
import NoteCardHeader from './NoteCardHeader';
import NoteCardPushPin from './NoteCardPushPin';

function NoteCard({ note, index }) {
  return (
    <div className="noteCard">
      <NoteCardPushPin index={index} />
      <NoteCardHeader title={note.title} date={note.createdAt} />
      <NoteCardBody note={note.body} />
    </div>
  );
}

NoteCard.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default NoteCard;
