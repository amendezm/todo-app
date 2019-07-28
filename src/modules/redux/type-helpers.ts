import { Reducer } from "redux";

import { ActionCreator, PayloadAction } from "../../lib/action-creators";

export type StateOf<T> = T extends Reducer<infer S> ? S : never;

export type ActionTypeOf<T> = T extends ActionCreator<infer P>
  ? PayloadAction<P>
  : never;

export type PayloadTypeOf<T> = T extends ActionCreator<infer S> ? S : never;
