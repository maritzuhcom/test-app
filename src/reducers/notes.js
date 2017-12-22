import { ADD_NOTE } from '../actions/notes';
// need {} when the thing you are importing is not being exported by default
// dont need {} when you ARE exporting by default

// this is the initial store
const defaultState = {
  notes: [],
};

// TODO make the note array an object so we can select/edit/delete using keys as note IDs

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_NOTE: {
      // this comes from the input in Header.js
      // so Header.js --> actions/notes.js --> here
      const newNote = {
        title: action.payload,
        message: '',
        selected: true,
      };

      state.notes.push(newNote);
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
