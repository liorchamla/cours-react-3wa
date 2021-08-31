import logo from "./logo.svg";
import "./App.css";
import React from "react";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

class App extends React.Component {
  state = {
    tasks: [
      { id: 1, text: "Aller au casino", done: false },
      { id: 2, text: "Tondre la pelouse", done: true },
      { id: 3, text: "Tailler le rosier", done: false },
    ],
  };

  changeTaskStatus = (id) => {
    // 1. Je fais une copie du tableau
    const tasks = [...this.state.tasks];

    // 2. Je trouve l'index de la tâche recherchée
    const index = tasks.findIndex(function (t) {
      return t.id === id;
    });

    // 3. Je change le statut de la tâche dans le tableau copié
    tasks[index].done = !tasks[index].done;

    // 4. Je met à jour le state avec la copie du tableau (qui contient la tâche modifiée)
    this.setState({
      tasks: tasks,
    });
  };

  createTask = (text) => {
    // 2. Créer un objet task (id, text, done: false)
    const task = {
      id: Date.now(),
      text: text,
      done: false,
    };

    // 5. Mettre à jour le state avec le nouveau tableau ET newTaskText à vide
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);

    this.setState({
      tasks,
    });
  };

  render() {
    const tasks = this.state.tasks;

    return (
      <div>
        <h1>TodoList de la mort</h1>
        <h2>Nombre de tâches : {tasks.length}</h2>

        <TasksList
          tasks={tasks}
          onChangeStatus={this.changeTaskStatus}
          onDelete={this.deleteTask}
        />

        <TaskForm text={this.state.newTaskText} onCreate={this.createTask} />
      </div>
    );
  }
}

export default App;
