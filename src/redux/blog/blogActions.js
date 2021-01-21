import * as actions from "./blogTypes";
const axios = require("axios");

// Blog Action Types
const fetchPostsRequest = () => {
  return {
    type: actions.FETCH_POSTS_REQUEST,
  };
};
const fetchPostsSuccess = (posts) => {
  return {
    type: actions.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
const fetchPostsFailure = (error) => {
  return {
    type: actions.FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// Async Request for Redux
export function fetchPosts() {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
}
