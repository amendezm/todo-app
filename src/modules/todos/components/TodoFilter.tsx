import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { filter } from "../redux/selectors";
import { setVisibilityFilter } from "../redux/actions";

const TodoFilter: React.FC = () => (
  <div className="buttons has-addons">
    <FilterButton text="All" colorClass="is-info" />
    <FilterButton text="Completed" colorClass="is-success" />
    <FilterButton text="Importants" colorClass="is-warning" />
  </div>
);

const FilterButton: React.FC<FButtonProps> = ({ text, colorClass }) => {
  const stateFilter = useSelector(filter);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(setVisibilityFilter({ filter: text }));
  }, [text, dispatch]);

  return (
    <button
      className={classNames("button", {
        [colorClass]: stateFilter === text
      })}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

type FButtonProps = {
  text: string;
  colorClass: string;
};

export { TodoFilter };
