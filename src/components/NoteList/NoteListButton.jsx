import React from 'react';
import PropTypes from 'prop-types';

function NoteListButton({ isShowArchived, changeNoteListType }) {
  const onClickListButton = () => changeNoteListType();

  return (
    <div className="noteListButton">
      <button type="button" className="selectedListButton">{isShowArchived ? 'Arsip' : 'Catatan Aktif'}</button>
      <button type="button" onClick={onClickListButton} className="listButton">{isShowArchived ? 'Catatan Aktif' : 'Arsip'}</button>
    </div>
  );
}

NoteListButton.propTypes = {
  isShowArchived: PropTypes.bool.isRequired,
  changeNoteListType: PropTypes.func.isRequired,
};

export default NoteListButton;
