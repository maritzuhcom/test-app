import React, { Component } from 'react';
// every single time you want to involve react with redux we need
import { connect } from 'react-redux';

// every single time we want to dispatch an action we need
import { bindActionCreators } from 'redux';

// we also need to import the action we're gonna use
import { addNote } from '../actions/notes';

import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  changeHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  keyDownHandler = (e) => {
    if (e.nativeEvent.code !== 'Enter') {
      return;
    }

    // dispatch this
    this.props.dispatchAddNote(this.state.input);
  }

  render() {
    return (
      <main>
        <header
          className="title"
        >
          notes
        </header>

        <input
          value={this.state.input}
          onChange={this.changeHandler}
          onKeyDown={this.keyDownHandler}
          placeholder="New Note"
          className="input-title"
          type="text"
        />
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatchAddNote: addNote, // this is the only line thats unique, the rest alwats looks like this
  }, dispatch);
}


export default connect(null, mapDispatchToProps)(Header);
