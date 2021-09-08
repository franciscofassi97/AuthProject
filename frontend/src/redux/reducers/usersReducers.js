import * as actionTypes from "../constants/usersConstants";

export const registerUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.USER_REGISTER_SUSSCESS:
      return {
        loading: false,
        user: action.payload,
        success: true,
      };
    case actionTypes.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

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
