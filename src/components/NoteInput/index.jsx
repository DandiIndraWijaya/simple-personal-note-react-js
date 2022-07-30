/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Input from '../common/Input';
import Button from '../common/Button';

function NoteInput({
  titleValue,
  bodyValue,
  onChangeTitleInput,
  onChangeBodyInput,
  onClickToggleForm,
  isOpenForm,
  onClickAddNote,
  errorInputMessage,
  limitValue,
}) {
  return (
    <div className="noteInput">
      {
        isOpenForm ? (
          <>
            <Button type="close" onClick={onClickToggleForm} />
            <div className="formContainer">
              <Input
                type="limit"
                placeholder="Ini adalah judul ..."
                name="title"
                value={titleValue}
                onChange={onChangeTitleInput}
                limit={limitValue}
              />
              <Input
                type="textarea"
                placeholder="Tuliskan catatanmu di sini ..."
                name="body"
                value={bodyValue}
                onChange={onChangeBodyInput}
              />
              {
                errorInputMessage !== '' && <p className="errorInputMessage">{errorInputMessage}</p>
              }
              <Button text="Tambah Catatan" type="submit" onClick={onClickAddNote} />
            </div>
          </>
        ) : <Button text="Tambah Catatan" type="display" onClick={onClickToggleForm} />

      }

    </div>
  );
}

NoteInput.propTypes = {
  titleValue: PropTypes.string.isRequired,
  bodyValue: PropTypes.string.isRequired,
  onChangeTitleInput: PropTypes.func.isRequired,
  onChangeBodyInput: PropTypes.func.isRequired,
  onClickToggleForm: PropTypes.func.isRequired,
  isOpenForm: PropTypes.bool.isRequired,
  onClickAddNote: PropTypes.func.isRequired,
  errorInputMessage: PropTypes.string.isRequired,
  limitValue: PropTypes.number.isRequired,
};

export default NoteInput;
