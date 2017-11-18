import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { addItem, filterItem } from '../actions.js';

class Operation extends Component {
  constructor(props, context) {
    super(props, context);

    this.onAdd = this.onAdd.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: ''
    }
  }

  onAdd(ev) {
    ev.preventDefault();
    const inputValue = this.state.value ? this.state.value.trim() : '';

    this.context.store.dispatch(addItem(inputValue));
    this.setState({ value: '' });
  }

  onInputChange(ev) {
    this.setState({
      value: ev.target.value
    })
  }

  onFilter(ev) {
    ev.preventDefault();
    const inputValue = this.state.value ? this.state.value.trim() : '';

    this.context.store.dispatch(filterItem(inputValue));
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.value} />
        <button onClick={this.onAdd}>
          添加
        </button>
        <button onClick={this.onFilter}>
          查询
        </button>
      </div>
    )
  }
}

Operation.contextTypes = {
  store: PropTypes.object
}

export default Operation;