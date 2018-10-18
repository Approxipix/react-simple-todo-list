import React, { PureComponent } from 'react';
import TodoListItem from './TodoListItem.jsx';

class TodoList extends PureComponent {
  render() {
    return (
      <div className="todo__wrapper">
        { this.props.items.map((item, index) =>
          <TodoListItem key={index} item={item}/>
        )}
      </div>
    );
  }
}

export default TodoList;
