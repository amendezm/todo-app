import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import { TodoForm } from "./modules/todos/components/TodoForm";
import { TodoList } from "./modules/todos/components/TodoList";
import { store } from "./modules/redux/store";

import "bulma/css/bulma.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export { App };
