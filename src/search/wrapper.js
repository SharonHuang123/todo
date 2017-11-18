import React, { Component } from 'react';
import Search from './search.js';
import List from '../add/list.js';

const dataList = [{
  id: 1,
  text: 'aaaa'
}, {
  id: 2,
  text: 'bbbb'
},
{
  id: 3,
  text: 'ababab'
}];

class Wrapper extends Component {
  constructor() {
    super(...arguments);

    this.onFilter = this.onFilter.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);

    this.state = {
      data: dataList,
      filter: dataList
    }
  }

  onFilter(text) {
    var oldData = this.state.data;
    var newData = oldData.filter((item) => {
      return item.text.indexOf(text) >= 0;
    })

    this.setState({
      filter: newData,
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
        <Search onFilter={this.onFilter} />
        <List data={this.state.filter} onDeleteItem={this.onDeleteItem} />
      </div>
    )
  }
}

export default Wrapper;