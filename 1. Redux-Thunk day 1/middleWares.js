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
  if (action.type === "todos/todosFetch") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await response.json();
    store.dispatch({
      type: "todos/todosLoaded",
      payload: todos,
    });
    console.log(store.getState());
    return;
  }
  next(action);
};

module.exports = {
  delyMiddleWares,
  fetchTodosMiddleWares,
};
