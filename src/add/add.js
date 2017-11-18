import React, { Component } from 'react';

class Add extends Component {
  constructor(args) {
    super(...args);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: ''
    }
  }

  onSubmit(ev) {
    ev.preventDefault();
    const inputValue = this.state.value;
    if (!inputValue.trim()) {
      return;
    }

    this.props.onAddItem(inputValue);
    this.setState({ value: '' });
  }

  onInputChange(ev) {
    this.setState({
      value: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.value} />
        <button onClick={this.onSubmit}>
          添加
        </button>
      </div>
    )
  }
}

export default Add;