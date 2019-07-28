import { ActionTypeOf } from "../../../redux/type-helpers";
import { addTodo, toggleTodo, remarkTodo, removeTodo } from "../actions";

const todos = (state: ITodoState[] = [], action: ActionType) => {
  switch (action.type) {
    case addTodo.type:
      return [...state, todo(initialTodoState, action)];
    case toggleTodo.type:
    case remarkTodo.type:
      return state.map(item =>
        item.id === action.payload.id ? todo(item, action) : item
      );
    case removeTodo.type:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const todo = (state: ITodoState = initialTodoState, action: ActionType) => {
  switch (action.type) {
    case addTodo.type:
      return {
        ...state,
        ...(action as ActionTypeOf<typeof addTodo>).payload
      };
    case toggleTodo.type:
      return {
        ...state,
        togle: !state.toggle
      };
    case remarkTodo.type:
      return {
        ...state,
        togle: !state.remarked
      };
    default:
      return state;
  }
};

const initialTodoState = {
  id: 0,
  text: "",
  toggle: false,
  remarked: false
};

type ITodoState = typeof initialTodoState;

type ActionType =
  | ActionTypeOf<typeof addTodo>
  | ActionTypeOf<typeof toggleTodo>
  | ActionTypeOf<typeof remarkTodo>
  | ActionTypeOf<typeof removeTodo>;

export { todos };
