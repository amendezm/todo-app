import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import className from "classnames";

import { removeTodo, remarkTodo, toggleTodo } from "../redux/actions";

const TodoItem: React.FC<IProps> = ({ id, text, remarked, toggled }) => {
  const dispatch = useDispatch();

  const handleToggleClick = useCallback(() => {
    dispatch(toggleTodo({ id }));
  }, [id, dispatch]);

  const handleRemarkClick = useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      dispatch(remarkTodo({ id }));
    },
    [id, dispatch]
  );

  const handleRemoveClick = useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      dispatch(removeTodo({ id }));
    },
    [id, dispatch]
  );

  return (
    <>
      <div className="column is-9">
        <p
          className={className({
            "has-text-weight-bold is-uppercase is-italic": remarked,
            "is-italic has-text-grey-light": toggled
          })}
          style={{
            textDecoration: toggled ? "line-through" : "",
            cursor: "pointer"
          }}
          onClick={handleToggleClick}
        >
          {text}
        </p>
      </div>
      <div className="column is-1">
        <a
          href="/"
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
          href="/"
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
