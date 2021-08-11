function logger({ getState, dispatch }) {
  return (next) => {
    return (action) => {
      console.log(getState());
      next(action);
      console.log(getState());
    };
  };
}

export default logger;
