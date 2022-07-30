/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import NoteCardBody from './NoteCardBody';
import NoteCardHeader from './NoteCardHeader';
import NoteCardPushPin from './NoteCardPushPin';
import NoteCardButton from './NoteCardButton';

function NoteCard({
  note,
  id,
  index,
  onClickArchive,
  onClickRemove,
}) {
  return (
    <div className="noteCard">
      <NoteCardPushPin index={index} />
      <NoteCardHeader title={note.title} date={note.createdAt} />
      <NoteCardBody note={note.body} />
      <NoteCardButton
        isArchived={note.archived}
        onClickArchive={onClickArchive}
        id={id}
        onClickRemove={onClickRemove}
      />
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
  id: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  onClickArchive: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default NoteCard;
