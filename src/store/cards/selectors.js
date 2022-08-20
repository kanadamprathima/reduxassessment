export const selectCheckingAmount = (reduxState) => {
  return reduxState.cards.checkingAccount;
};

export const selectSavings = (reduxState) => {
  return reduxState.cards.savings;
};

export const selectCards = (reduxState) => {
  return reduxState.cards.cards;
};
