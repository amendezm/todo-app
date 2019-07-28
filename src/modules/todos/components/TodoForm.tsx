import React from "react";

let nextTodoId = 0;

const TodoForm: React.FC = () => {
  const ref = React.createRef<HTMLInputElement>();

  const handleClick = () => {};

  return (
    <div className="field is-grouped">
      <p className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Type a task"
          ref={ref}
        />
      </p>
      <p className="control">
        <a className="button is-info" onClick={handleClick}>
          Add
        </a>
      </p>
    </div>
  );
};

export { TodoForm };
