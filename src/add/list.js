import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import Item from './item.js';

class List extends Component {
  render() {
    var { data, onDeleteItem } = this.props;
    return (
      <ul>
        {
          data.map((item) => {
            return <Item key={item.id} id={item.id} text={item.text} onDeleteItem={onDeleteItem} />
          })
        }
      </ul>
    )
  }
}

List.protypes = {
  data: PropTypes.array.isRequired
}

export default List;