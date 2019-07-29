import React from "react";

const TodoItem: React.FC<IProps> = ({ text }) => <li>{text}</li>;

type IProps = {
  text: string;
};
export { TodoItem };
