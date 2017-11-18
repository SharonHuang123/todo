import React, { Component } from 'react';
import Add from './add.js';
import List from './list.js';

class Wrapper extends Component {
  constructor() {
    super(...arguments);

    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);

    this.state = {
      id: 0,
      data: []
    }
  }

  onAddItem(text) {
    var oldData = this.state.data;
    var oldId = this.state.id;

    var newId = oldId + 1;
    var newData = Object.assign([], oldData);
    newData.push({ id: newId, text: text });

    this.setState({
      data: newData,
      id: newId
    });
  }

  onDeleteItem(id) {
    var oldData = this.state.data;
    var newData = oldData.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      data: newData
    });
  }

  render() {
    return (
      <div>
        <Add onAddItem={this.onAddItem} />
        <List data={this.state.data} onDeleteItem={this.onDeleteItem} />
      </div>
    )
  }
}

export default Wrapper;
