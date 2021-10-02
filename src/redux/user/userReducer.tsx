import userTypes from './userTypes';

export const INITIAL_STATE = {
    currentUser: null,
    logginIn: false,
    error: false,
    errorMessage: null,
    userId: null,
    token: sessionStorage.getItem('token'),
  };
  

// interface IAction<T> extends Action<string> {
//     type: string;
//     payload?: T;
//     error?: boolean;
//     meta?: any;
// }

const userReducer = (state=INITIAL_STATE, action: any) => {
    switch (action.type) {
        case userTypes.SIGN_IN_START:
            return {...state, logginIn: true}
        case userTypes.SIGN_IN_SUCCESS:
            return {...state, logginIn: false, token: action.token, userId: action.userId}
        case userTypes.SIGN_IN_FAILURE:
          return {...state, logginIn: false, error: true, errorMessage: action.errorMessage}
        case userTypes.LOGOUT:
          return {...state, userId: null, token: null}
        default:
          return state;
    }
  }
  export default userReducer;
