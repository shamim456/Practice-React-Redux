const store = require("./RTK/app/store");
const { counterActions } = require("./RTK/features/counter/CounterSlice");

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());
