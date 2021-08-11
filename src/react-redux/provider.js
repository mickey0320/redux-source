import React from "react";

import ReactReduxContext from "./reactReduxContext";

function Provider({ store, children }) {
  const contextValue = {
    store
  }
  return <ReactReduxContext.Provider value={contextValue}>{children}</ReactReduxContext.Provider>;
}

export default Provider;
