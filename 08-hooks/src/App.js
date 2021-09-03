import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import Timer from "./components/Timer";
import FunctionnalTimer from "./components/FunctionnalTimer";

const TASKS = [
  { id: 1, text: "Aller au casino", done: false },
  { id: 2, text: "Tondre la pelouse", done: true },
  { id: 3, text: "Tailler le rosier", done: false },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [displayTimer, setDisplayTimer] = useState(false);

  const createTask = (text) => {
    // 1. Créer un objet task (id, text, done)
    const newTask = { id: Date.now(), text: text, done: false };

    // 2. Mettre à jour l'état (setTasks)
    setTasks([...tasks, newTask]);
  };

  const changeTaskStatus = (id) => {
    // 0. Créer une copie des tasks, pour ne pas bosser sur mon state (tasks)
    const updatedTasks = [...tasks];

    // 1. Récupérer l'index de la tâche qui a cet id
    const index = updatedTasks.findIndex((t) => t.id === id);

    // 2. Inverser la valeur de done pour la tâche à l'index
    updatedTasks[index].done = !updatedTasks[index].done;

    // 3. Modifier le state "tasks" en le remplaçant par la copie que j'en ai fait
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>Ma TodoList</h1>

      <button onClick={() => setDisplayTimer(!displayTimer)}>
        Afficher / Cacher le timer
      </button>

      {displayTimer === true && <FunctionnalTimer />}

      <ul>
        {tasks.map((t) => (
          <TaskItem task={t} onChangeStatus={changeTaskStatus} key={t.id} />
        ))}
      </ul>
      <TaskForm onCreate={createTask} />
    </>
  );
};

export default App;
