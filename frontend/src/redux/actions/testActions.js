import * as actionTypes from "../constants/testConstants";
import fire from "../../fire";
import axios from "axios";

export const createTestAction = (test) => async (dispatch) => {
  //Esto se repite cada... como puedo hacer que exista en un solo lugar? donde?
  //o mas bien es problema q este en todas las peticiones  q necesito hacer ?

  const token = await fire.auth().currentUser.getIdToken();

  try {
    dispatch({ type: actionTypes.TEST_CREATE_REQUEST, payload: test });

    const { data } = await axios.post("/api/test/post", test, {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch({ type: actionTypes.TEST_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.TEST_CREATE_FAIL, payload: message });
  }
};
