import { Dispatch } from 'redux';
import axios from "axios";

import { REST_API_URL } from '../constants';
import postTypes from './postTypes';

export const postLoad = () => async function(dispatch: Dispatch) {
    
    dispatch(postLoadStart());
    const token = sessionStorage.getItem("token");
      axios
      .get(REST_API_URL + "/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {

        // LocalStorage ruu hadgalna
        const posts = result.data;

        dispatch(postLoadSuccess(posts));
      })
      .catch((err) => {
        dispatch(postLoadError(err));
      });
    
}

export const postLoadStart = function() {
    return {
      type: postTypes.POST_LOAD_START,
    };
  };


  export const postLoadSuccess = function(posts: Object) {
    return {
      type: postTypes.POST_LOAD_SUCCESS,
      posts
    };
  };
  
  export const postLoadError = function(error: any) {
    return {
      type: postTypes.POST_LOAD_FAILURE,
      errorMessage: error.response.data.error.message,
    };
  };  