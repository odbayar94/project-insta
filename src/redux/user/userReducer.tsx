import userTypes from './userTypes';
import {Action} from 'redux';


export const INITIAL_STATE = {
    currentUser: null,
    logginIn: false,
    error: false,
    token: localStorage.getItem('token'),
  };
  

interface IAction<T> extends Action<string> {
    type: string;
    payload?: T;
    error?: boolean;
    meta?: any;
}

const userReducer = (state=INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_START:
            return{...state, logginIn: true}
        default:
          return state;
    }
  }
  export default userReducer;
