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
      titleInputValue: '',
      bodyInputValue: '',
      errorInputMessage: '',
      keyword: '',
      inputTitleLimit: 50,
    };

    this.onChangeTitleInput = this.onChangeTitleInput.bind(this);
    this.onChangeBodyInput = this.onChangeBodyInput.bind(this);
    this.onClickToggleForm = this.onClickToggleForm.bind(this);
    this.onClickAddNote = this.onClickAddNote.bind(this);
    this.onSearchNote = this.onSearchNote.bind(this);
    this.onClickArchive = this.onClickArchive.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onChangeTitleInput = (e) => {
    const limitValue = 50 - e.target.value.length;
    if (limitValue < 0) {
      return;
    }
    this.setState({
      titleInputValue: e.target.value,
      errorInputMessage: '',
      inputTitleLimit: limitValue,
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
      inputTitleLimit: 50,
    });
  };

  onSearchNote = (keyword) => {
    this.setState({
      keyword,
    });
  };

  getNoteIndex = (id) => {
    const { data } = this.state;
    return data.findIndex((note) => note.id === id);
  };

  onClickArchive = (id) => {
    const { data } = this.state;
    const updatedNote = data;

    const index = this.getNoteIndex(id);
    updatedNote[index].archived = !updatedNote[index].archived;
    this.setState({
      data: updatedNote,
    });
  };

  onClickRemove = (id) => {
    const { data } = this.state;
    const updatedNote = data;

    const index = this.getNoteIndex(id);
    updatedNote.splice(index, 1);
    this.setState({
      data: updatedNote,
    });
  };

  render() {
    const {
      data,
      titleInputValue,
      bodyInputValue,
      isOpenForm,
      errorInputMessage,
      keyword,
      inputTitleLimit,
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
          limitValue={inputTitleLimit}
        />
        <NoteList
          notes={data}
          keyword={keyword}
          onSearchNote={this.onSearchNote}
          onClickArchive={this.onClickArchive}
          onClickRemove={this.onClickRemove}
        />
      </div>
    );
  }
}

export default PersonalNotes;
