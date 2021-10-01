import { configureStore, createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "todos",
  initialState: [{ id: 1, text: "Aller faire les courses", done: false }],
  reducers: {
    addTodo: function (state, action) {
      state.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    deleteTodo: function (state, action) {
      const id = action.payload;

      const index = state.findIndex((t) => t.id === id);

      state.splice(index, 1);
    },
    toggleTodo: function (state, action) {
      const id = action.payload;

      const index = state.findIndex((t) => t.id === id);

      state[index].done = !state[index].done;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = slice.actions;

export const store = configureStore({
  reducer: {
    todos: slice.reducer,
  },
});
