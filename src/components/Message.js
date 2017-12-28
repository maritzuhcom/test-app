import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Message.css';
import { updateNote } from '../actions/notes';

class Message extends Component {
  changeHandler = (e) => {
    this.props.dispatchUpdateNote(this.props.id, e.target.value);
  }

  render() {
    return (
      <main
        className="messageArea"
      >
        <textarea
          placeholder="Note Content"
          type="text"
          value={this.props.message}
          onChange={this.changeHandler}
        />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.notes.selectedNote };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatchUpdateNote: updateNote,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Message);
