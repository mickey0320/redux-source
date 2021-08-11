function combineReducers(reducers) {
  return (state = {}, action) => {
    const keys = Object.keys(reducers);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      const previousStateForKey = state[key];
      const reducer = reducers[key];
      const newStateForKey = reducer(previousStateForKey, action);

      state[key] = newStateForKey;
    }

    return state
  };
}

export default combineReducers;
