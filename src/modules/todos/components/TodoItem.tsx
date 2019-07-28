import React from "react";

const TodoItem: React.FC<IProps> = ({ text }) => <div>{text}</div>;

type IProps = {
  text: string;
};
export { TodoItem };
