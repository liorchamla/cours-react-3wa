import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../app/store";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const toggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toggle(item.id)}
        />
        {item.text}

        <button onClick={() => deleteTask(item.id)}>Supprimer</button>
      </label>
    </li>
  );
};

export default TodoItem;
