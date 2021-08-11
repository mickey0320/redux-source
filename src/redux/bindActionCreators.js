function bindActionCreators(actionCreators, store) {
  return Object.keys(actionCreators).reduce((memo, action) => {
    const actionCreator = actionCreators[action]
    memo[action] = function (...args) {
      return store.dispatch(actionCreator(...args));
    };

    return memo;
  }, {});
}

export { bindActionCreators };
