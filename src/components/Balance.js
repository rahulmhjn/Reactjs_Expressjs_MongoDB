import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  var amount = transactions.map((transaction) => transaction.amount);
  var bal = amount.reduce((acc, curr) => acc + curr, 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${bal}</h1>
    </>
  );
};
