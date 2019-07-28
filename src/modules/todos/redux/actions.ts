import { createAction } from "./../../../lib/action-creators";

const addTodo = createAction<{
  id: number;
  text: string;
  toggled: boolean;
  remarked: boolean;
}>("ADD_TODO");

const removeTodo = createAction<{ id: number }>("REMOVE_TODO");

const toggleTodo = createAction<{ id: number }>("TOGGLE_TODO");

const remarkTodo = createAction<{ id: number }>("REMARK_TODO");

const setVisibilityFilter = createAction<{ filter: string }>(
  "SET_VISIBILITY_FILTER"
);

export { addTodo, removeTodo, toggleTodo, remarkTodo, setVisibilityFilter };
