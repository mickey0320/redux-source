import { useContext, useEffect, useState } from "react";

import ReactReduxContext from "./reactReduxContext";

function connect(mapState, mapDispatch) {
  return (WrappedComponent) => {
    return (props) => {
      const [_, forceUpdate] = useState(0);
      const { store } = useContext(ReactReduxContext);
      const state = store.getState();
      const mapStateProps = mapState(state);
      let mapDispatchProps = {};
      if (typeof mapDispatch === "function") {
        mapDispatchProps = mapDispatch(store.dispatch);
      } else if (typeof mapDispatch === "object") {
        mapDispatchProps = Object.keys(mapDispatch).map((action) => {
          return function (...args) {
            return store.dispatch(mapDispatch[action](...args));
          };
        });
      } else {
        mapDispatchProps = {
          dispatch: store.dispatch,
        };
      }
      const newProps = {
        ...mapStateProps,
        ...mapDispatchProps,
        ...props,
      };

      useEffect(() => {
        const un = store.subscribe(() => {
          forceUpdate(_ + 1);
        });

        return () => {
          un();
        };
      }, []);

      return <WrappedComponent {...newProps} />;
    };
  };
}

export default connect;
