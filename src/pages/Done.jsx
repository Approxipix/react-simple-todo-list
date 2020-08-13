import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList.jsx';
import { getTodoList } from '../actions/todoActions';

class Done extends Component {
  componentDidMount() {
    this.props.todoList({ done: true });
  }

  render() {
    return (
      <section className="complete-task container">
        <h2 className="todo__title">Completed Task</h2>
        <div className="section__wrapper">
          <TodoList items={this.props.items}/>
        </div>
      </section>
    );
  }
}


const mapStateToProps = ({ items, loading }) => ({ items, loading });

const mapDispatchToProps = (dispatch) => ({
  todoList: (params) => dispatch(getTodoList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Done);
