import { combineReducers } from "redux";
import { filter } from "./filter";
import { todos } from "./todos";
import { StateOf } from "../../../redux/type-helpers";

const reducer = combineReducers({ todos, filter });

export type TodosState = StateOf<typeof reducer>;

export { reducer };
