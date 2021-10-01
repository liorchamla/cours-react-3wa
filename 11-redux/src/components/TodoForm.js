import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/store";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        text: text,
        done: false,
      })
    );
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <form onSubmit={addTask}>
      <input
        placeholder="Nouvelle tâche"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button>Ajouter</button>
    </form>
  );
};

export default TodoForm;
