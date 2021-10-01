import "./App.css";
import React, { useEffect, useState } from "react";

import {
  getDatabase,
  ref,
  onValue,
  update,
  set,
  remove,
} from "firebase/database";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const db = getDatabase();

  useEffect(() => {
    const todosRef = ref(db, "todos");
    onValue(todosRef, (data) => {
      const todos = data.val();

      if (!todos) {
        setTasks([]);
        return;
      }

      const items = Object.keys(todos).map((cle) => {
        return { ...todos[cle], id: cle };
      });

      setTasks(items);
    });
  }, []);

  const handleChange = (id) => {
    const task = tasks.find((t) => t.id === id);

    update(ref(db, "todos/" + id), {
      done: !task.done,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      text: text,
      done: false,
    };

    set(ref(db, "todos/" + Date.now()), task);
  };

  const handleDelete = (id) => remove(ref(db, "todos/" + id));

  return (
    <>
      <h1>Liste des tâches</h1>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => handleChange(t.id)}
            />{" "}
            {t.text}
            <button onClick={() => handleDelete(t.id)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
    </>
  );
}

export default App;
