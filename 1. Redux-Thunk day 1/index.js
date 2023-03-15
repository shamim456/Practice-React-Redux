// initial state

const { createStore, applyMiddleware } = require("redux");
const { delyMiddleWares, fetchTodosMiddleWares } = require("./middleWares");

const initialState = {
  todos: [],
};

// reducer

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todosAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todos/todosLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

// create redux store

const store = createStore(
  todosReducer,
  applyMiddleware(delyMiddleWares, fetchTodosMiddleWares)
);

// subscribe to store

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action

store.dispatch({
  type: "todos/todosAdded",
  payload: "Hello shamim",
});

store.dispatch({
  type: "todos/todosFetch",
});
