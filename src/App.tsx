import React from "react";
import { Provider } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import { TodoForm } from "./modules/todos/components/TodoForm";

import "bulma/css/bulma.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>TODO App</h1>
      <TodoForm />
    </div>
  );
};

export { App };
