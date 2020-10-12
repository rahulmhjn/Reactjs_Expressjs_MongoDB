import React, { useContext } from "react";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { AddTransaction } from "../components/AddTransaction";

import { Context as AuthContext } from "../context/AuthContext";

import "../App.css";

const MainScreen = ({ history }) => {
  const { error, signout } = useContext(AuthContext);

  const logout = () => {
    signout();
    if (!error) {
      history.push("/login");
    }
  };

  return (
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      <button className="btn danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default MainScreen;
