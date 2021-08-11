import {
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
} from "react";

import ReactReduxContext from "../reactReduxContext";

function useSelector(excutor, equalFn = (left, right) => left === right) {
  const { store } = useContext(ReactReduxContext);
  const [_, forUpdate] = useReducer((x) => x + 1, 0);
  const lastMyState = useRef();
  const state = store.getState();
  const myState = excutor(state);

  useEffect(() => {
    lastMyState.current = myState;
  });

  useLayoutEffect(() => {
    store.subscribe(() => {
      const myState = excutor(state);
      if (!equalFn(lastMyState.current, myState)) {
        console.log("refresh");
        forUpdate();
      }
    });
  }, []);

  return myState;
}

export default useSelector;
