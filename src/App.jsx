import React from 'react';
import getInitialData from './utils/data';

import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';

class PersonalNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      isOpenForm: false,
      isShowArchived: false,
      titleInputValue: '',
      bodyInputValue: '',
      errorInputMessage: '',
    };

    this.onChangeNoteListType = this.onChangeNoteListType.bind(this);
    this.onChangeTitleInput = this.onChangeTitleInput.bind(this);
    this.onChangeBodyInput = this.onChangeBodyInput.bind(this);
    this.onClickToggleForm = this.onClickToggleForm.bind(this);
    this.onClickAddNote = this.onClickAddNote.bind(this);
  }

  onChangeNoteListType = () => {
    this.setState((prevState) => ({
      isShowArchived: !prevState.isShowArchived,
    }));
  };

  onChangeTitleInput = (e) => {
    this.setState({
      titleInputValue: e.target.value,
      errorInputMessage: '',
    });
  };

  onChangeBodyInput = (e) => {
    this.setState({
      bodyInputValue: e.target.value,
      errorInputMessage: '',
    });
  };

  onClickToggleForm = () => {
    this.setState((prevState) => ({
      isOpenForm: !prevState.isOpenForm,
    }));
  };

  generateNoteId = () => +new Date();

  generateNote = (id, title, body) => ({
    id,
    title,
    body,
    createdAt: new Date().toString(),
    archived: false,
  });

  addNoteDataValidation = (title, body) => {
    if (title === '') {
      return {
        error: true,
        message: 'Judul harus diisi!',
      };
    } if (body === '') {
      return {
        error: true,
        message: 'Catatan harus diisi!',
      };
    }
    return {
      error: false,
      message: '',
    };
  };

  onClickAddNote = () => {
    const noteId = this.generateNoteId();
    const { data, titleInputValue, bodyInputValue } = this.state;
    const { error, message } = this.addNoteDataValidation(titleInputValue, bodyInputValue);
    if (error) {
      this.setState({ errorInputMessage: message });
      return;
    }

    const newNote = this.generateNote(noteId, titleInputValue, bodyInputValue);
    const addedNewNote = data;
    addedNewNote.unshift(newNote);
    this.setState({
      data: addedNewNote,
      titleInputValue: '',
      bodyInputValue: '',
    });
  };

  render() {
    const {
      data,
      isShowArchived,
      titleInputValue,
      bodyInputValue,
      isOpenForm,
      errorInputMessage,
    } = this.state;

    return (
      <div className="container">
        <NoteInput
          titleValue={titleInputValue}
          bodyValue={bodyInputValue}
          onChangeTitleInput={this.onChangeTitleInput}
          onChangeBodyInput={this.onChangeBodyInput}
          onClickToggleForm={this.onClickToggleForm}
          isOpenForm={isOpenForm}
          onClickAddNote={this.onClickAddNote}
          errorInputMessage={errorInputMessage}
        />
        <NoteList
          notes={data}
          isShowArchived={isShowArchived}
          changeNoteListType={this.onChangeNoteListType}
        />
      </div>
    );
  }
}

export default PersonalNotes;
