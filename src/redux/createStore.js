function createStore(reducer, initialState) {
  let currentState = initialState;
  const rootReducer = reducer;
  let listeners = [];
  function subscribe(fn) {
    listeners.push(fn);

    return () => {
      listeners = listeners.filter((l) => l !== fn);
    };
  }
  function dispatch(action) {
    if (typeof action !== "object") {
      throw new Error("dispatch的参数必须是一个对象");
    }
    currentState = rootReducer(currentState, action);
    listeners.forEach((listener) => listener());

    return action
  }
  function getState() {
    return currentState;
  }

  dispatch({type: 'INIT'})

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore;
