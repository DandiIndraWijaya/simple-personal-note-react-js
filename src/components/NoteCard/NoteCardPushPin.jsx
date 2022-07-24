import React from 'react';
import PropTypes from 'prop-types';

function NoteCardPushPin({ index }) {
  const colors = [
    '#9400D3',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
  ];

  const getColor = (indexOfColor) => {
    if (indexOfColor > 5) {
      return colors[indexOfColor % 6];
    }
    return colors[indexOfColor];
  };

  return <div className="pushPin" style={{ backgroundColor: getColor(index), color: getColor(index) }} />;
}

NoteCardPushPin.propTypes = {
  index: PropTypes.number.isRequired,
};

export default NoteCardPushPin;
