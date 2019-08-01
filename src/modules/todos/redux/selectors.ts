import { TodosState } from "./reducer";

const todos = ({ todos }: TodosState) => todos;

const filter = ({ filter }: TodosState) => filter;

export { todos, filter };
