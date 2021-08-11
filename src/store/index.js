import { createStore, combineReducers } from "../redux";

import reducer from "./reducer";
import reducer2 from "./reducer2";

const rootReducer = combineReducers({
  model: reducer,
  model2: reducer2,
});

const store = createStore(rootReducer);

export default store;
