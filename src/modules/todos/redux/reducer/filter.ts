import { setVisibilityFilter } from "./../actions";
import { ActionTypeOf } from "../../../redux/type-helpers";

const filter = (
  state: string = "",
  action: ActionTypeOf<typeof setVisibilityFilter>
) => {
  switch (action.type) {
    case setVisibilityFilter.type:
      return action.payload.filter;
    default:
      return state;
  }
};

export { filter };
