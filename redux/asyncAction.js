const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

//
const fetchPostsRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostsSucceded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
};

const fetchPostsFaild = (error) => {
  return {
    type: "error/failed",
    payload: error,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "posts/succeeded":
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };

    case "error/failed":
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        posts: [],
      };

    default:
      return state;
  }
};

// thunk function
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequested());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const posts = await response.json();

      dispatch(fetchPostsSucceded(posts));
    } catch (err) {
      console.log("Hello ", err);
      dispatch(fetchPostsFaild(err));
    }
  };
};

// crete store
const store = createStore(reducer, applyMiddleware(thunk));

// subscribe to state change
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(fetchPosts());
