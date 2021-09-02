import React, { useState, useRef } from "react";

const TaskForm = ({ onCreate }) => {
  const [newTaskText, setNewTaskText] = useState("");
  const input = useRef();

  const handleChange = (event) => setNewTaskText(event.target.value);

  const handleForm = (event) => {
    event.preventDefault();

    onCreate(newTaskText);

    // 3. Remettre newTaskText à 0
    setNewTaskText("");

    // 4. Je donne le focus à l'input
    input.current.focus();
  };

  return (
    <form onSubmit={handleForm}>
      <input
        ref={input}
        type="text"
        placeholder="Nouvelle tâche"
        value={newTaskText}
        onChange={handleChange}
      />
      <button>Ajouter</button>
    </form>
  );
};

export default TaskForm;
