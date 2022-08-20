import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkingAccount: 1000,
  savings: 8000,
  cards: [
    { id: 1, blocked: false, limit: 200, max: 5000 },
    { id: 2, blocked: true, limit: 300, max: 2000 },
    { id: 3, blocked: true, limit: 700, max: 4000 },
    { id: 4, blocked: false, limit: 100, max: 500 },
  ],
  privateMode: false,
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    toChecking: (state, action) => {
      if (action.payload < state.savings) {
        state.checkingAccount = state.checkingAccount + action.payload;
        console.log(action.payload);
      }
    },
    tosavings: (state, action) => {
      if (action.payload < state.checkingAccount) {
        state.savings = state.savings + action.payload;
      }
    },
    deposit: (state, action) => {
      state.checkingAccount = state.checkingAccount + action.payload;
    },
    withdraw: (state, action) => {
      if (action.payload < state.checkingAccount) {
        state.checkingAccount = state.checkingAccount - action.payload;
      }
    },
    changeLimit: (state, action) => {
      if (
        action.payload > state.cards.limit &&
        action.payload < state.cards.max
      ) {
        state.cards.limit = action.payload;
      }
    },
    toggleBlock: (state, action) => {
      const id = action.payload;
      // console.log("id", id)
      //check if it's a favorite
      const newArray = state.cards.includes(id)
        ? //if exist, remove from array
          state.cards.filter((cardsId) => cardsId !== id)
        : //else we want to add it
          [...state.cards, id];
      console.log("new array", newArray);
      //update the state
      state.cards = newArray;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {
  toChecking,
  tosavings,
  deposit,
  withdraw,
  toggleBlock,
  changeLimit,
} = cardSlice.actions;

export default cardSlice.reducer;
