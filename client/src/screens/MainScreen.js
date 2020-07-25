import React from "react";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { AddTransaction } from "../components/AddTransaction";
import { Link } from "react-router";

import "../App.css";

const MainScreen = () => {
  return (
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default MainScreen;
