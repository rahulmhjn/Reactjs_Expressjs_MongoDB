export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return { ...state, loading: false, transactions: action.payload };
    case "deleteTransaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "addTransaction":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "TRANSACTION_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
