import { ADD2, MINUS2 } from "./constants";

const defaultState = {
  num: 0,
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD2:
      return {
        ...state,
        num: state.num + action.payload,
      };
    case MINUS2:
      return {
        ...state,
        num: state.num + action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
