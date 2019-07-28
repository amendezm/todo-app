import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

let nextTodoId = 0;

const TodoForm: React.FC = () => {
  const [fieldValue, setFieldValue] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(evt.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      dispatch(
        addTodo({
          id: nextTodoId++,
          text: fieldValue,
          toggled: false,
          remarked: false
        })
      );
      setFieldValue("");
    },
    [fieldValue, dispatch]
  );

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Type a task"
            value={fieldValue}
            onChange={handleChange}
          />
        </p>
        <p className="control">
          <button type="submit" className="button is-info">
            Add
          </button>
        </p>
      </div>
    </form>
  );
};

export { TodoForm };
