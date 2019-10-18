import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpense from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amount: 100, createdAt: 0 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 300, createdAt: 0 })
);
store.dispatch(setTextFilter("bill"));

console.log(
  getVisibleExpense(store.getState().expenses, store.getState().filters)
);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
