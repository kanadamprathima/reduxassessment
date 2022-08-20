import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from "./cards/slice";

const store = configureStore({
  reducer: {
    cards: cardSliceReducer,
  },
});

export default store;
