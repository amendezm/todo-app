import { Action } from "redux";

const createAction = <P = undefined>(type: string): ActionCreator<P> => {
  function actionCreator(): Action<string>;
  function actionCreator(payload: P): PayloadAction<P>;
  function actionCreator(payload?: P): Action<string> | PayloadAction<P> {
    return { type, payload };
  }

  actionCreator.type = type;
  actionCreator.toString = () => type;
  return actionCreator;
};

export interface ActionCreator<P = undefined> {
  (): Action<string>;
  (payload: P): PayloadAction<P>;
  type: string;
}

export interface PayloadAction<P> extends Action<string> {
  payload: P;
}

export { createAction };
