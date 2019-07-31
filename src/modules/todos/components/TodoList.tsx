import React from "react";
import { useSelector } from "react-redux";

import { TodoItem } from "./TodoItem";
import { todosSelector } from "../redux/selectors";

const TodoList: React.FC = () => {
  const todos = useSelector(todosSelector);
  return (
    <div className="columns is-multiline">
      {todos.map((todo, index) => (
        <TodoItem key={index} {...todo} />
      ))}
    </div>
  );
};

export { TodoList };
