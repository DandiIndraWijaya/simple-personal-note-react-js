import React from 'react';
import PropTypes from 'prop-types';

import Button from '../common/Button';

function NoteCardButton({
  isArchived,
  id,
  onClickArchive,
  onClickRemove,
}) {
  return (
    <div className="noteCardButton">
      <Button
        type={isArchived ? 'unarchive' : 'archive'}
        onClick={onClickArchive}
        id={id}
      />
      <Button
        type="remove"
        onClick={onClickRemove}
        id={id}
      />
    </div>
  );
}

NoteCardButton.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  onClickArchive: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default NoteCardButton;
