import getInitialData from './data';

const STORAGE_KEY = 'personal-notes';

const isStorageExist = () => {
  if (typeof Storage === 'undefined') {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
};

const getData = () => {
  if (isStorageExist()) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data === null) {
      const initialNotes = getInitialData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify());
      return initialNotes;
    }
    return data;
  }
  return [];
};

const generateBookId = () => +new Date();

const addNote = () => {
  console.log('Add a note');
};

const deleteNote = () => {
  console.log('Delete a note');
};

export {
  getData,
  addNote,
  deleteNote,
};
