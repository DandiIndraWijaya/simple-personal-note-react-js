import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from '../NoteCard';

import './style.css';
import NoteListButton from './NoteListButton';
import Input from '../common/Input';

function NoteList({ notes, isShowArchived, changeNoteListType }) {
  return (
    <div className="noteList">
      <div className="noteListTopbar">
        <NoteListButton isShowArchived={isShowArchived} changeNoteListType={changeNoteListType} />
        <Input type="search" value="" placeholder="Cari catatan ..." onChange={() => console.log('change')} />
      </div>
      <div className="noteListContainer">
        {isShowArchived && notes.map((note, index) => note.archived && <NoteCard key={`${note.id}`} index={index} note={note} />)}
        {!isShowArchived && notes.map((note, index) => !note.archived && <NoteCard key={`${note.id}`} index={index} note={note} />)}
      </div>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
  })).isRequired,
  isShowArchived: PropTypes.bool.isRequired,
  changeNoteListType: PropTypes.func.isRequired,
};

export default NoteList;
