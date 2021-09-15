import axios from "axios";
import fire from "../../fire";
import * as actionTypes from "../constants/usersConstants";

export const signinUserAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_SIGNIN_REQUEST, payload: user });

    if (user) {
      dispatch({
        type: actionTypes.USER_SIGNIN_SUSSCESS,
        payload: user,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.USER_SIGNIN_FAIL, payload: message });
  }
};

//authObserver
export const authObserver = () => (dispatch) => {
  try {
    return fire.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: actionTypes.USER_SIGNIN_SUSSCESS,
          payload: user,
        });
      }
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.USER_SIGNIN_FAIL, payload: message });
  }
};

export const getAllUsersAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_USERS_REQUEST });
  try {
    const { data } = await axios.get("/api/users/list");

    dispatch({ type: actionTypes.GET_USERS_SUSSCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.GET_USERS_FAIL, payload: message });
  }
};
