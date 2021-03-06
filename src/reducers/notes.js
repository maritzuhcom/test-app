import { ADD_NOTE, DELETE_NOTE, SELECT_NOTE, UPDATE_NOTE } from '../actions/notes';
// need {} when the thing you are importing is not being exported by default
// dont need {} when you ARE exporting by default

// this is the initial store
const defaultState = {
  noteList: [],
  selectedNote: {},
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_NOTE: {
      // this comes from the input in Header.js
      // so Header.js --> actions/notes.js --> here

      // create a random id per note
      const newId = Math.floor(Math.random() * 100000);

      // note object
      // action.payload is the input of the user(title)
      // create new object
      const newNote = {
        title: action.payload,
        message: '',
        id: newId,
      };

      // copy state to new variable called noteList
      const noteList = [...state.noteList];
      // push newNote to noteList
      noteList.unshift(newNote);
      // return an object of new state
      return { ...state, noteList: [...noteList], selectedNote: newNote };
    }
    case DELETE_NOTE: {
      // action.payload is the ID of the note we want to delete
      // note.id is the id of every note
      const updatedList = state.noteList.filter(note => action.payload !== note.id);

      return { ...state, noteList: [...updatedList] };
    }
    case SELECT_NOTE: {
      const result = state.noteList.find(note => action.payload === note.id);
      return { ...state, selectedNote: result };
    }
    case UPDATE_NOTE: {
      const newState = { ...state };
      newState.selectedNote.message = action.payload.message;
      return { ...state };
    }
    default: {
      // we use the spread operator becuse we need to return a new object
      // and ... is how we copy objects by value and not by reference
      // without ... (spread) they are copied by val and by ref, so they are linked
      return { ...state }; // ES6
      // return Object.assign({}, state); ES5
    }
  }
}
// reducers store the global state
