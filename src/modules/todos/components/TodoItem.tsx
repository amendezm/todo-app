import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import className from "classnames";

import { removeTodo, remarkTodo } from "../redux/actions";

const TodoItem: React.FC<IProps> = ({ id, text, remarked }) => {
  const dispatch = useDispatch();

  const handleRemarkClick = useCallback(() => {
    dispatch(remarkTodo({ id }));
  }, [id, dispatch]);

  const handleRemoveClick = useCallback(() => {
    dispatch(removeTodo({ id }));
  }, [id, dispatch]);

  return (
    <>
      <div className="column is-9">
        <span
          className={className({
            "has-text-bold is-uppercase is-italic": remarked
          })}
        >
          {text}
        </span>
      </div>
      <div className="column is-1">
        <a
          role="button"
          className={className(
            remarked ? "has-text-warning" : "has-text-black"
          )}
          onClick={handleRemarkClick}
        >
          <i className={className(remarked ? "fas" : "far", "fa-star")} />
        </a>
      </div>
      <div className="column is-1">
        <a
          role="button"
          className="has-text-danger"
          onClick={handleRemoveClick}
        >
          <i className="fas fa-trash-alt" />
        </a>
      </div>
    </>
  );
};

type IProps = {
  id: number;
  text: string;
  toggled: boolean;
  remarked: boolean;
};
export { TodoItem };
