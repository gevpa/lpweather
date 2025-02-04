//TODO: This is dummy store, you can replace it with your own store
// store is more advanced, we will see that together

import { configureStore } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  weather: "sunny",
  temperature: 25,
};

// Define a reducer
const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        weather: action.payload,
      };
    case "SET_TEMPERATURE":
      return {
        ...state,
        temperature: action.payload,
      };
    default:
      return state;
  }
};

// Create a store
const store = configureStore({
  reducer: weatherReducer,
});

export default store;
