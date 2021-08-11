import { ADD, MINUS } from "./constants";

const defaultState = {
  num: 0,
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + action.payload,
      };
    case MINUS:
      return {
        ...state,
        num: state.num + action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
