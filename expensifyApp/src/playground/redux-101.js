import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

// Actions - than an object that gets ent to the store

// I'd like to increment the count
store.dispatch({
  type: "INCREMENT"
});

console.log(store.getState());
store.dispatch({
  type: "INCREMENT"
});

console.log(store.getState());

store.dispatch({
  type: "RESET"
});

console.log(store.getState());

store.dispatch({
  type: "DECREMENT"
});

// I'd like to reset the count to zero

console.log(store.getState());
