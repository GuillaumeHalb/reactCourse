import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpense from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amount: 4500, createdAt: 10 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 300, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));
store.dispatch(setTextFilter());

const state = store.getState();
console.log(getVisibleExpense(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
