import React, { useCallback } from "react";
import ReactDOM from "react-dom";

import { Provider, useDispatch, useSelector } from "./react-redux";

import store from "./store";
import { add, add2, asyncAdd } from "./store/actionCreator";

function Component1() {
  const count = useSelector((state) => state.model.num);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    // dispatch(add(1));
    dispatch(asyncAdd(1));
  }, []);

  return <div onClick={handleClick}>{count}</div>;
}

function Component2() {
  const count = useSelector((state) => state.model2.num);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(add2(1));
  }, []);

  return <div onClick={handleClick}>{count}</div>;
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Component1 />
        <Component2 />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
