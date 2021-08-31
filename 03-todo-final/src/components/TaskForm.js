import React from "react";

export default class TaskForm extends React.Component {
  state = {
    newTaskText: "",
  };

  handleTaskChange = (event) => {
    const text = event.target.value;

    this.setState({
      newTaskText: text,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.newTaskText.trim() === "") {
      return;
    }

    this.props.onCreate(this.state.newTaskText);

    this.setState({
        newTaskText: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={this.state.newTaskText}
          onChange={this.handleTaskChange}
        />
        <button>Ajouter</button>
      </form>
    );
  }
}
