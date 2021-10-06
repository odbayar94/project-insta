import { Dispatch } from 'redux';
import axios from "axios";
import Cookies from "js-cookie";



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
        // sessionStorage.setItem("token", result.data.user.token);
        // sessionStorage.setItem("userId", result.data.user.userId);

        //Set cookie
        //  set(name, value, [options]) 
        Cookies.set("token",  result.data.user.token);

        dispatch(loginUserSuccess( result.data.user.token, result.data.user.userId));
      })
      .catch((err) => {
        if(!err.response){
          const error = {
            response:{
                          data:{
                            error:{
                              message: "Сервертэй холбогдоход алдаа гарлаа"
                            }
                          }
                        }};
          
          dispatch(loginUserError(error));
        }else{
          dispatch(loginUserError(err));
        }
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
   Cookies.remove("token");
    console.log("logged out");
    return {
      type: userTypes.LOGOUT,
    };
  };