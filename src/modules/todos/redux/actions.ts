import { createAction } from "./../../../lib/action-creators";

const addTodo = createAction<{ id: number; text: string }>("ADD_TODO");

const removeTodo = createAction<{ id: number }>("REMOVE_TODO");

const toggleTodo = createAction<{ id: number }>("TOGGLE_TODO");

const remarkTodo = createAction<{ id: number }>("REMARK_TODO");

const setVisibilityFIlter = createAction<{ filter: string }>(
  "SET_VISIBILITY_FILTER"
);

export { addTodo, removeTodo, toggleTodo, remarkTodo, setVisibilityFIlter };
