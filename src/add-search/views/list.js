import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import Item from './item.js';

class List extends Component {
  constructor(props, context) {
    super(props, context);

    this.getFilterData = this.getFilterData.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = this.getFilterData();
  }

  getFilterData() {
    var currentState = this.context.store.getState();
    var filterData = [...currentState.data];

    filterData = filterData.filter((item) => {
      return item.text.indexOf(currentState.filter) >= 0;
    });

    return { data: filterData };
  }

  onChange() {
    this.setState(this.getFilterData());
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  render() {
    var { data } = this.state;
    return (
      <ul>
        {
          data.map((item) => {
            return <Item key={item.id} id={item.id} text={item.text} />
          })
        }
      </ul>
    )
  }
}

List.contextTypes = {
  store: PropTypes.object
}

export default List;