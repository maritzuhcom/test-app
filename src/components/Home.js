import React from 'react';
import Header from './Header';
import NoteList from './NoteList';
import ListItem from './ListItem';
import Message from './Message';

import './Home.css';

const Home = () => (
  <main className="home">
    <section className="home-section">
      <Header />

      <NoteList>
        ??
      </NoteList>
      <Message />
    </section>
  </main>
);

export default Home;
