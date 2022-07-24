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
    };

    this.onChangeNoteListType = this.onChangeNoteListType.bind(this);
    this.onChangeTitleInput = this.onChangeTitleInput.bind(this);
    this.onChangeBodyInput = this.onChangeBodyInput.bind(this);
    this.onClickOpenForm = this.onClickOpenForm.bind(this);
  }

  onChangeNoteListType = () => {
    this.setState((prevState) => ({
      isShowArchived: !prevState.isShowArchived,
    }));
  };

  onChangeTitleInput = (e) => {
    this.setState({
      titleInputValue: e.target.value,
    });
  };

  onChangeBodyInput = (e) => {
    this.setState({
      bodyInputValue: e.target.value,
    });
  };

  onClickOpenForm = () => {
    this.setState((prevState) => ({
      isOpenForm: !prevState.isOpenForm,
    }));
  };

  render() {
    const {
      data, isShowArchived, titleInputValue, bodyInputValue, isOpenForm,
    } = this.state;

    return (
      <div className="container">
        <NoteInput
          titleValue={titleInputValue}
          bodyValue={bodyInputValue}
          onChangeTitleInput={this.onChangeTitleInput}
          onChangeBodyInput={this.onChangeBodyInput}
          onClickOpenForm={this.onClickOpenForm}
          isOpenForm={isOpenForm}
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
