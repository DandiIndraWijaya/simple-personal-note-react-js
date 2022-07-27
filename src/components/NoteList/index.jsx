import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from '../NoteCard';

import './style.css';
import NoteListButton from './NoteListButton';
import Input from '../common/Input';

class NoteList extends React.Component {
  constructor(props) {
    const { notes } = props;
    super(props);
    this.state = {
      notes,
      isShowArchived: false,
      keyword: '',
    };

    this.onChangeNoteListType = this.onChangeNoteListType.bind(this);
    this.onSearchNote = this.onSearchNote.bind(this);
  }

  onChangeNoteListType = () => {
    const { notes } = this.props;
    this.setState((prevState) => ({
      notes,
      isShowArchived: !prevState.isShowArchived,
      keyword: '',
    }));
  };

  onSearchNote = (keyword) => {
    const { notes } = this.props;
    const { isShowArchived } = this.state;
    const result = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()) && note.archived === isShowArchived);
    this.setState({
      notes: result,
      keyword,
    });
  };

  render() {
    const { notes, isShowArchived, keyword } = this.state;
    return (
      <div className="noteList">
        <div className="noteListTopbar">
          <NoteListButton isShowArchived={isShowArchived} changeNoteListType={this.onChangeNoteListType} />
          <Input type="search" value={keyword} placeholder="Cari catatan ..." onChange={this.onSearchNote} />
        </div>
        <div className="noteListContainer">
          {isShowArchived && notes.map((note, index) => note.archived && <NoteCard key={`${note.id}`} index={index} note={note} />)}
          {!isShowArchived && notes.map((note, index) => !note.archived && <NoteCard key={`${note.id}`} index={index} note={note} />)}
        </div>
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
  })).isRequired,
};

export default NoteList;
