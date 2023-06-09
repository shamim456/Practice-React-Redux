// const { default: fetch } = require("node-fetch");
const fetch = require("node-fetch");
const delyMiddleWares = (store) => (next) => (action) => {
  if (action.type === "todos/todosAdded") {
    console.log("dely");
    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }
  return next(action);
};

const fetchTodosMiddleWares = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  next(action);
};

module.exports = {
  delyMiddleWares,
  fetchTodosMiddleWares,
};
