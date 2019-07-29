import { TodosState } from "./reducer";

const todosSelector = ({ todos }: TodosState) => todos;

const filter = ({ filter }: TodosState) => filter;

export { todosSelector, filter };
