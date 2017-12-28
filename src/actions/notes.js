// actions export constants to be used by the reducer,
// action and reducer are connected by the constants

// actions export functions to be used by the component
// actions and components are connected by functions in this file
// name each one with the verb and noun

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const addNote = noteTitle => ({
  type: ADD_NOTE,
  payload: noteTitle,
});

export const deleteNote = noteId => ({
  type: DELETE_NOTE,
  payload: noteId,
});

export const selectNote = noteId => ({
  type: SELECT_NOTE,
  payload: noteId,
});

export const updateNote = (noteId, message) => ({
  type: UPDATE_NOTE,
  payload: {
    noteId,
    message,
  },
});
