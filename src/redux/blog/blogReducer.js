import * as actions from "./blogTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case actions.FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default BlogReducer;
