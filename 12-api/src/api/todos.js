import axios from "axios";

export const updateTodo = (task) => {
  return axios.put(
    "https://mod-react-2-default-rtdb.europe-west1.firebasedatabase.app/todos/" +
      task.id +
      ".json",
    task
  );
};

export const getTodos = () => {
  return axios
    .get(
      "https://mod-react-2-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    )
    .then((response) => {
      const json = response.data;

      if (!json) {
        return [];
      }
      return Object.keys(json).map((cle) => {
        return { ...json[cle], id: cle };
      });
    });
};

export const createTodo = (task) => {
  return axios
    .post(
      "https://mod-react-2-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      task
    )
    .then((json) => {
      task.id = json.data.name;
      return task;
    });
};

export const deleteTodo = (id) => {
  return axios.delete(
    "https://mod-react-2-default-rtdb.europe-west1.firebasedatabase.app/todos/" +
      id +
      ".json"
  );
};
