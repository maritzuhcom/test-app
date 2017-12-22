import React, { Component } from 'react';

import './ListItem.css';

export default class ListItem extends Component {
  editHandler = () => {
    console.log('edit modal open here!');
  }

  selectHandler = () => {
    console.log('select here!');
  }

  deleteHandler = () => {
    console.log('delete here!');
  }

  render() {
    return (
      <main className="listItem">
        <div
          onClick={this.selectHandler}
          className="material-icons"
          onKeyPress={this.selectHandler}
          role="button"
          tabIndex="0"
          tooltip="Save"
        >
          <i className="material-icons">done</i>
        </div>

        <span
          onClick={this.editHandler}
          onKeyPress={this.editHandler}
          role="button"
          tabIndex="0"
          tooltip="Edit"
        >
          text goes here
        </span>

        <div
          onClick={this.deleteHandler}
          onKeyPress={this.deleteHandler}
          role="button"
          tabIndex="0"
          tooltip="Delete"
        >
          <i className="material-icons">clear</i>
        </div>
      </main>
    );
  }
}
