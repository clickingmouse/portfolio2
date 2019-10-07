import {
  VisibilityFilters,
  SET_BLOG_VISIBILITY_FILTER,
  ADD_BLOG_POST,
  TOGGLE_BLOG
} from "../actions/blogActionTypes";

//
const { SHOW_ALL_BLOGS } = VisibilityFilters;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL_BLOGS,
  blogs: []
};

const todoBlog = (state = initialState, action) => {
  if (typeof state === "undefined") {
    return state;
  }

  switch (action.type) {
    case SET_BLOG_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });

    case ADD_BLOG_POST:
      return Object.assign({}, state, {
        blogs: [
          ...state.blogs,
          {
            text: action.text,
            completed: false
          }
        ]
      });

    case TOGGLE_BLOG:
      return Object.assign({}, state, {
        blogs: state.blogs.map((blog, index) => {
          if (index === action.index) {
            return Object.assign({}, blog, {
              completed: !blog.completed
            });
          }
          return blog;
        })
      });

    default:
      return state;
  }
  // For now, don't handle any actions
  // and just return the state given to us.
  //return state
};

//const
export const visibilityFilter = (state = SHOW_ALL_BLOGS, action) => {
  switch (action.type) {
    case SET_BLOG_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default todoBlog;
