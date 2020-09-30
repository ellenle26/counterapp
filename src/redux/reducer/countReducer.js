import React from "react";

let initialState = {
  count: 0,
  color: "",
  singleColor: [],
};

const countReducer = (state = initialState, action) => {
  let { type, payload } = action;

  if (type === "INCREMENT") {
    state.count++;
  }

  if (type === "DECREMENT") {
    state.count--;
    if (state.count <= 0) {
      state.count = 0;
      state.singleColor = [];
      state.color = "";
    }
  }

  if (type === "COLORCHANGE") {
    state.color = payload;
  }

  if (type === "CHANGEBOXCOL") {
    state.singleColor[payload.index] = payload.colorBox;
    state.singleColor = [...state.singleColor];
    console.log(state.singleColor[payload.index], payload.index);
  }

  if (type === "RESET") {
    state.count = 0;
    state.singleColor = [];
    state.color = "";
  }

  return { ...state };
};

export default countReducer;
