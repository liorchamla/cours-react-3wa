import React from "react";

export default class Task extends React.Component {
  render() {
    const task = this.props.task;

    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => this.props.onChangeStatus(task.id)}
          />
          {task.text}
        </label>
        <button onClick={() => this.props.onDelete(task.id)}>X</button>
      </li>
    );
  }
}
