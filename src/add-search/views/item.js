import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { removeItem } from '../actions.js';

class Item extends Component {
  constructor(props, context) {
    super(props, context);

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove() {
    var id = this.props.id;
    this.context.store.dispatch(removeItem(id));
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

Item.contextTypes = {
  store: PropTypes.object
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default Item;