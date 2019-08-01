import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { TodoItem } from "./TodoItem";
import {
  todos as todosSelector,
  filter as filterSelector
} from "../redux/selectors";

const TodoList: React.FC = () => {
  const todos = useSelector(todosSelector);
  const filter = useSelector(filterSelector);

  const filterFunction = useMemo(() => getFilterFunction(filter), [filter]);

  return (
    <div
      style={{
        height: "45vh",
        maxHeight: "45vh",
        overflowY: "scroll",
        overflowX: "hidden"
      }}
    >
      <div className="columns is-multiline">
        {todos.filter(filterFunction).map((todo, index) => (
          <TodoItem key={index} {...todo} />
        ))}
      </div>
    </div>
  );
};

const getFilterFunction = (filter: string) =>
  filter === "All"
    ? (item: ITodo) => item
    : filter === "Completed"
    ? (item: ITodo) => item.toggled
    : (item: ITodo) => item.remarked;

type ITodo = {
  id: number;
  text: string;
  toggled: boolean;
  remarked: boolean;
};

export { TodoList };
