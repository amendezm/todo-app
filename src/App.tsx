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
        <h1 className="title has-text-centered">TODO App</h1>
        <hr />
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <TodoForm />
              <hr />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export { App };
