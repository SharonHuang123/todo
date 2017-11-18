import React, { Component } from 'react'

class Item extends Component {
  constructor() {
    super(...arguments);

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove() {
    this.props.onDeleteItem(this.props.id);
  }

  render() {
    var { text } = this.props;

    return (
      <li>
        <label>{text}</label>
        <button onClick={this.onRemove}> X </button>
      </li>
    )
  }
}

export default Item;