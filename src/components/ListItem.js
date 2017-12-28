import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './ListItem.css';
import { deleteNote, selectNote } from '../actions/notes';

class ListItem extends Component {
  editHandler = () => {
    this.props.dispatchSelectedNote(this.props.id);
  }

  selectHandler = () => {
    console.log('select here!');
  }

  deleteHandler = () => {
    this.props.dispatchDeleteNote(this.props.id);
  }

  render() {
    // this will be truw when this listitem is selected
    // console.log(this.props.isSelected);

    return (
      <main className="listItem hover-delete">
        <div
          onClick={this.selectHandler}
          className="material-icons"
          onKeyPress={this.selectHandler}
          role="button"
          tabIndex="0"
        >
          {this.props.isSelected ? <i className="material-icons selected">fiber_manual_record</i> : ''}
        </div>

        <span
          className="notesTitle"
          onClick={this.editHandler}
          onKeyPress={this.editHandler}
          role="button"
          tabIndex="0"
        >
          { this.props.title }
        </span>

        <div
          onClick={this.deleteHandler}
          onKeyPress={this.deleteHandler}
          role="button"
          tabIndex="0"
        >
          <i className="material-icons delete">clear</i>
        </div>
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatchDeleteNote: deleteNote,
    dispatchSelectedNote: selectNote,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ListItem);
