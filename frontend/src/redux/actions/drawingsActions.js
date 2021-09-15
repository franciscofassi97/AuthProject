import * as actionTypes from "../constants/drawingsConstants";
import axios from "axios";
import fire from "../../fire";

export const uploadDrawingAction = (drawing) => async (dispatch) => {
  const token = await fire.auth().currentUser.getIdToken();

  try {
    dispatch({ type: actionTypes.UPLOAD_DRAWING_REQUEST, payload: drawing });

    const formData = new FormData();
    formData.append("titleDrawing", drawing.titleDrawing);
    formData.append("descriptionDrawing", drawing.descriptionDrawing);
    formData.append("imagenUrlDrawing", drawing.imagenUrlDrawing);
    formData.append("uidUser", drawing.uidUser);

    const { data } = await axios.post("/api/drawings/upload", formData, {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch({ type: actionTypes.UPLOAD_DRAWING_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.UPLOAD_DRAWING_FAIL, payload: message });
  }
};

export const getDrawingsByIdUserAction = (uidUser) => async (dispatch) => {
  const token = await fire.auth().currentUser.getIdToken();

  dispatch({ type: actionTypes.GET_DRAWING_USER_ID_REQUEST });

  try {
    const { data } = await axios.get(`/api/drawings/list/${uidUser}`, {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch({ type: actionTypes.GET_DRAWING_USER_ID_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: actionTypes.GET_DRAWING_USER_ID_FAIL, payload: message });
  }
};
