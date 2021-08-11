import { ADD, MINUS, ADD2, MINUS2 } from "./constants";

export const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const minus = (payload) => {
  return {
    type: MINUS,
    payload,
  };
};

export const asyncAdd = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(payload));
    }, 1000);
  };
};

export const add2 = (payload) => {
  return {
    type: ADD2,
    payload,
  };
};

export const minus2 = (payload) => {
  return {
    type: MINUS2,
    payload,
  };
};
