import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  transactions: [],
  error: null,
  loading: true,
  token: null,
};

//create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      const token = await localStorage.getItem("token");
      console.log("gcghcgh" + token);
      const res = await axios.get("/api/v1/transactions", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res.data.data);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      console.log("mahajan" + err);
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    const token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.delete(`/api/v1/transactions/${id}`, config);

      dispatch({
        type: "deleteTransaction",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({
        type: "addTransaction",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function signup({ email, password, name }) {
    try {
      console.log("signup");
      const response = await axios.post("/signup", { email, password, name });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
    }
  }

  async function signin({ email, password }) {
    // make api request with that email and password
    try {
      const response = await axios.post("/signin", { email, password });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin",
      });
    }
  }

  const signout = (dispatch) => {
    return () => {
      localStorage.removeItem("token");
      dispatch({ type: "signout" });
      //    navigate('loginFlow');
    };
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        token: state.token,
        deleteTransaction,
        addTransaction,
        getTransactions,
        signup,
        signin,
        signout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
