// actions export constants to be used by the reducer,
// action and reducer are connected by the constants

// actions export functions to be used by the component
// actions and components are connected by functions in this file

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = noteTitle => ({
  type: ADD_NOTE,
  payload: noteTitle,
});

export const deleteNote = noteId => ({
  type: DELETE_NOTE,
  payload: noteId,
});
