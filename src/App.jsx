import React from 'react';
// import data from './utils/data';

class PersonalNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello, world!',
    };
  }

  render() {
    const { title } = this.state;

    return <h1>{title}</h1>;
  }
}

export default PersonalNotes;
