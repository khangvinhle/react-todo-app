import React, { Component } from "react";

import "./index.css";
import greenTickIcon from '../../assets/images/green-tick.svg';
import blackTickIcon from '../../assets/images/black-tick.svg';
import editIcon from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';

class TodoItem extends Component {
  handleToggle = e => {
    e.preventDefault();

    const { onToggleTodo } = this.props;
    onToggleTodo();
  }

  handleDelete = e => {
    e.preventDefault();
    const { onDeleteTodo } = this.props;
    onDeleteTodo();
  }

  render() {
    const { data: { content, completed } } = this.props;

    return (
      <div className="todo-item-container">
        <a href="#" className="todo-item-toggle" onClick={this.handleToggle}>
          {completed && <img src={greenTickIcon} alt="tick" />}
          {!completed && <img src={blackTickIcon} alt="tick" />}
        </a>

        <div className={`todo-item-content ${completed} ? 'completed' : 'incompleted'`} >
          {content}
        </div>

        <div className="todo-item-options">
          <a href="#" className="icon-btn">
            <img src={editIcon} alt="edit" />
          </a>
          <a href="#" className="icon-btn" onClick={this.handleDelete}>
            <img src={deleteIcon} alt="remove" />
          </a>
        </div>
      </div>
    )
  }
}

export default TodoItem;
