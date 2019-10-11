import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  };

  handleSubmit = (event) => {
    this.props.addTask(this.state.input);
    this.setState({ input: '' });
    event.preventDefault();
  };

  render() {
    return (
      <form className="todo__form" onSubmit={this.handleSubmit}>
        <input className="todo__input" type="text" onChange={this.handleChange} value={this.state.input} />
        <button type="submit" className="todo__button">
          <i className="material-icons">add</i>
        </button>
      </form>
    )
  }
}

export default connect()(AddTodoItem)
