import * as actionTypes from "../constants/usersConstants";

export const signinUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNIN_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.USER_SIGNIN_SUSSCESS:
      return {
        loading: false,
        user: action.payload,
        success: true,
      };
    case actionTypes.USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_SIGNIN_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case actionTypes.GET_USERS_SUSSCESS:
      return {
        loading: true,
        users: action.payload,
        success: true,
      };
    case actionTypes.GET_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_USERS_RESET:
      return {
        users: [],
      };
    default:
      return state;
  }
};

//
