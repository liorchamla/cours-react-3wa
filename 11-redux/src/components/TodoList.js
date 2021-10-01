import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../app/store";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <h1>Liste des tâches</h1>
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
      <TodoForm />
    </>
  );
};

export default TodoList;
