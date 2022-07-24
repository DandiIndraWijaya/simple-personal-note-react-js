/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Input from '../common/Input';
import Button from '../common/Button';

function NoteInput({
  titleValue, bodyValue, onChangeTitleInput, onChangeBodyInput, onClickOpenForm, isOpenForm,
}) {
  return (
    <div className="noteInput">
      <Button text="Tambah Catatan" type="display" onClick={onClickOpenForm} />
      {
        isOpenForm && (
        <div className="formContainer">
          <Input className="inputText" type="text" placeholder="Ini adalah judul ..." name="title" value={titleValue} onChange={onChangeTitleInput} />
          <Input className="inputTextArea" type="textarea" placeholder="Tuliskan catatanmu di sini ..." name="body" value={bodyValue} onChange={onChangeBodyInput} />
        </div>
        )
      }

    </div>
  );
}

NoteInput.propTypes = {
  titleValue: PropTypes.string.isRequired,
  bodyValue: PropTypes.string.isRequired,
  onChangeTitleInput: PropTypes.func.isRequired,
  onChangeBodyInput: PropTypes.func.isRequired,
  onClickOpenForm: PropTypes.func.isRequired,
  isOpenForm: PropTypes.bool.isRequired,
};

export default NoteInput;
