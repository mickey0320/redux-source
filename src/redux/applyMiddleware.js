import compose from "./compose";

function applyMiddleware(...middlewares) {
  return (createStore) => {
    return (reducer) => {
      const store = createStore(reducer);
      let dispatch;
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };

      const middlewareFns = middlewares.map((middleware) =>
        middleware(middlewareAPI)
      );
      dispatch = compose(...middlewareFns)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
  };
}

export default applyMiddleware;
