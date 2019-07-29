import React from "react";
import { useSelector } from "react-redux";

import { TodoItem } from "./TodoItem";
import { todosSelector } from "../redux/selectors";

const TodoList: React.FC = () => {
  const todos = useSelector(todosSelector);
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo.text} />
      ))}
    </ul>
  );
};

export { TodoList };
