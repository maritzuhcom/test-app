import React from 'react';

import './NoteList.css';

// TODO this is pretty much done, just needs CSS
// scrollable etc...
const NoteList = props => (
  <main className="noteList">
    {props.children}
  </main>
);

export default NoteList;
