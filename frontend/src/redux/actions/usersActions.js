import axios from "axios";
import fire, { authGoogle } from "../../fire";
import * as actionTypes from "../constants/usersConstants";

export const registerUserAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_REGISTER_REQUEST, payload: user });

    const { data } = await axios.post("/api/users/auth/signup", user);

    dispatch({ type: actionTypes.USER_REGISTER_SUSSCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.USER_REGISTER_FAIL, payload: message });
  }
};

export const signinUserAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_SIGNIN_REQUEST, payload: user });

    if (user.providerData[0].providerId === "password") {
      dispatch({
        type: actionTypes.USER_SIGNIN_SUSSCESS,
        payload: user,
      });
    } else if (user.providerData[0].providerId === "google.com") {
      const { data } = await axios.post("/api/users/auth/singin", user);

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

//authObserver es un action de usuario ?  o deberia estar en fire.js
export const authObserver = () => (dispatch) => {
  return fire.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: actionTypes.USER_SIGNIN_SUSSCESS,
        payload: user,
      });
    }
  });
};
