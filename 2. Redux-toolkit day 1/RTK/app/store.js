const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require("../features/counter/CounterSlice");

const store = configureStore({
  reducer: { counterReducer },
});

module.exports = store;
