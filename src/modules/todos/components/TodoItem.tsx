import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/actions";

const TodoItem: React.FC<IProps> = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(removeTodo({ id }));
  }, [id, dispatch]);

  return (
    <li>
      <div className="level">
        <span>{text}</span>
        <button className="button is-danger" onClick={handleClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

type IProps = {
  id: number;
  text: string;
};
export { TodoItem };
