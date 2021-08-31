import React from "react";
import Task from "./Task";

export default class TasksList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChangeStatus={this.props.onChangeStatus}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}
