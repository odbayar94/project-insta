import { Dispatch } from 'redux';
import axios from "axios";

import { REST_API_URL } from '../constants';
import userTypes from './userTypes';

export const loginUser = (username: String, password: String) => async (dispatch: Dispatch)=> {
    
    dispatch(loginUserStart());
    
    const data = {
        username,
        password,
      };

      axios
      .post(REST_API_URL + "/users/login", data)
      .then((result) => {
        // LocalStorage ruu hadgalna
        const token = result.data.user.token;
        const userId = result.data.user.userId;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userId", userId);
       

        dispatch(loginUserSuccess(token, userId));
      })
      .catch((err) => {
        dispatch(loginUserError(err));
      });
    
}

export const loginUserStart = () => {
    return {
      type: userTypes.SIGN_IN_START,
    };
  };


  export const loginUserSuccess = (token: String, userId: String) => {
    return {
      type: userTypes.SIGN_IN_SUCCESS,
      token,
      userId,
    };
  };
  
  export const loginUserError = (error: any) => {
    return {
      type: userTypes.SIGN_IN_FAILURE,
      errorMessage: error.response.data.error.message,
    };
  };  


  export function logOut (){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    console.log("logged out");
    return {
      type: userTypes.LOGOUT,
    };
  };