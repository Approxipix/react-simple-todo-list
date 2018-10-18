import React, { Component } from 'react';
import { updateTask, removeTask } from '../actions/todoActions';
import { connect } from 'react-redux';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.item.status,
      description: this.props.item.description
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.description !== this.state.description) {
      this.setState({ description: nextProps.item.description });
    }
    if (nextProps.status !== this.state.status) {
      this.setState({ status: nextProps.item.status });
    }
  }

  handleDelete = () => {
    const { _id } = this.props.item;
    this.props.removeTask(_id);
  };

  handleStatus = () => {
    const { _id } = this.props.item;
    this.setState({
      status: !this.state.status
    }, () => {
      this.props.updateTask(_id, this.state)
      }
    );
  };

  render() {
    const { status, description } = this.state;
    const extraClass = status === true ? "todo-item_done" : "";
    return (
      <div className={`todo-item + ${extraClass}`}>
        <label className="todo-item__desc">
          <i className="material-icons todo-item__checkbox-icon">
            {status === true ? "check_box" : "check_box_outline_blank"}
          </i>
          <input id="checkbox" type="checkbox"
                 className="todo-item__checkbox"
                 onChange={this.handleStatus} defaultChecked={status}/>
          <p className="todo-item__desc__text">{description}</p>
        </label>
        <button type="button"
                className="todo-item__button todo-item__button_remove"
                onClick={() => this.handleDelete()}>
          <i className="material-icons">delete_forever</i>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (id, data) => dispatch(updateTask(id, data)),
    removeTask: (id) => dispatch(removeTask(id)),
  };
};

export default connect(null, mapDispatchToProps)(TodoListItem);
