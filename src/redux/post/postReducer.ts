import postTypes from './postTypes';

export const INITIAL_STATE = {
    currentUser: null,
    loadingPage: false,
    error: false,
    errorMessage: null,
    userId: null,
    posts: [],
    token: sessionStorage.getItem('token'),
  };
  


const postReducer = (state=INITIAL_STATE, action: any) => {
    switch (action.type) {
        case postTypes.POST_LOAD_START:
            return {...state, loadingPage: true}
        case postTypes.POST_LOAD_SUCCESS:
            return {...state, loadingPage: false, posts: action.posts}
        case postTypes.POST_LOAD_FAILURE:
          return {...state, logginIn: false, error: true, errorMessage: action.errorMessage}
        default:
          return state;
    }
  }
  export default postReducer;
