import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList: React.FC<IProps> = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoItem text={todo} />
    ))}
  </>
);

type IProps = {
  todos: string[];
};
