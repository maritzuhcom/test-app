import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import NoteList from './NoteList';
import ListItem from './ListItem';
import Message from './Message';
import './Home.css';

class Home extends Component {
  // list of notes currently in redux state
  // iterate over that and display note.title
  // this is where you decalre the list item and use them in other files
  getNotes = () => this.props.noteList.map(note => (
    <ListItem
      key={note.id}
      title={note.title}
      id={note.id}
    />
  ))

  render() {
    const hasList = this.props.noteList.length;
    return (
      <main className="home">
        <section className="home-section">
          <Header />
          {hasList ?
            <NoteList>
              { this.getNotes() }
            </NoteList>
            :
            ''
          }
          {hasList ?
            <Message />
          :
          ''
        }
        </section>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return { noteList: [...state.notes.noteList] };
}

export default connect(mapStateToProps)(Home);
