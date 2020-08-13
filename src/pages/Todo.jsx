import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodoList, addTask } from '../actions/todoActions';
import AddTodoItem from '../components/AddTodoItem.jsx'
import TodoList from '../components/TodoList.jsx'

class TodoPage extends Component {
  componentDidMount() {
    this.props.todoList();
  }

  getTodoCompleteCount = () => {
    let completeTask = 0;
    for (let i = 0; i < this.props.items.length; i++) {
      if (this.props.items[i].status === true) {
        completeTask++;
      }
    }
    return completeTask;
  };

  getTodoProgressPercent = () => {
    let completeTask = this.getTodoCompleteCount();
    return (
      completeTask * 100 / this.props.items.length
    );
  };

  render() {
    return (
      <section className="todo container">
        <h2 className="todo__title">Todo List</h2>
        <div className="section__wrapper">
          <AddTodoItem addTask={this.props.addTask} />
          <p className="todo__desc">
            Completed Task: {this.getTodoCompleteCount()} / {this.props.items.length}
          </p>
          <div className="todo__progress">
            <div className="todo__progress__bar"
                 style={{ width: `${this.getTodoProgressPercent()}%` }}
            />
          </div>
          <TodoList items={this.props.items}/>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = (dispatch) => ({
  todoList: () => dispatch(getTodoList()),
  addTask: (description) => dispatch(addTask(description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);




