import { createStore, combineReducers, applyMiddleware } from "../redux";
import thunk from '../middlewares/redux-thunk'
import logger from '../middlewares/redux-logger'

import reducer from "./reducer";
import reducer2 from "./reducer2";

const rootReducer = combineReducers({
  model: reducer,
  model2: reducer2,
});

const store = applyMiddleware(thunk, logger)(createStore)(rootReducer);

export default store;
