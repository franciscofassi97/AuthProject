import * as actionTypes from "../constants/commentsConstants";
import fire from "../../fire";
import axios from "axios";

export const createCommentAction = (comment) => async (dispatch) => {
  const token = await fire.auth().currentUser.getIdToken();

  try {
    dispatch({ type: actionTypes.COMENT_CREATE_REQUEST, payload: comment });

    const { data } = await axios.post("/api/comments/create", comment, {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch({ type: actionTypes.COMENT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.COMENT_CREATE_FAIL, payload: message });
  }
};
