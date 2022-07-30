import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from '../NoteCard';

import './style.css';
import Input from '../common/Input';

function NoteList({
  notes,
  keyword,
  onSearchNote,
  onClickArchive,
  onClickRemove,
}) {
  const renderNote = (isArchived) => {
    const noteList = notes.filter((note) => note.archived === isArchived
    && note.title.toLowerCase().includes(keyword.toLowerCase()));

    return noteList;
  };

  return (
    <div className="noteList">
      <Input type="search" value={keyword} placeholder="Cari catatan ..." onChange={onSearchNote} />
      <div id="noteActive">
        <div className="listTitle">Catatan Aktif</div>
        <div className="noteListContainer">
          {renderNote(false).length > 0 ? renderNote(false).map((note, index) => (
            <NoteCard
              key={note.id}
              index={index}
              id={note.id}
              note={note}
              onClickArchive={onClickArchive}
              onClickRemove={onClickRemove}
            />
          )) : (
            <div className="emptyNote">
              <h1>Catatan Kosong</h1>
            </div>
          )}
        </div>
      </div>
      <div id="noteArchive">
        <div className="listTitle">Arsip</div>
        <div className="noteListContainer">
          {renderNote(true).length > 0 ? renderNote(true).map((note, index) => (
            <NoteCard
              key={note.id}
              index={index}
              id={note.id}
              note={note}
              onClickArchive={onClickArchive}
              onClickRemove={onClickRemove}
            />
          )) : (
            <div className="emptyNote">
              <h1>Catatan Kosong</h1>
            </div>
          )}
        </div>
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
  keyword: PropTypes.string,
  onSearchNote: PropTypes.func.isRequired,
  onClickArchive: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

NoteList.defaultProps = {
  keyword: '',
};

export default NoteList;
