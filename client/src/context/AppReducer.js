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

    case "add_error":
      return { ...state, error: action.payload };

    // case 'signup':
    //     return { ...state, token: action.payload, errorMessage: '' }
    case "signin":
      return { token: action.payload, error: "" };

    case "signout":
      return { token: null, error: "" };

    default:
      return state;
  }
};
