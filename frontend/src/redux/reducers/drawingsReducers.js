import * as actionTypes from "../constants/drawingsConstants";

export const uploadDrawingReducer = (state = { drawing: {} }, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_DRAWING_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.UPLOAD_DRAWING_SUCCESS:
      return {
        loading: false,
        success: true,
        drawing: action.payload,
      };
    case actionTypes.UPLOAD_DRAWING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.UPLOAD_DRAWING_RESET:
      return {
        drawing: {},
      };
    default:
      return state;
  }
};
export const getDrawingsByIdUserReducer = (
  state = { drawingsByIdUser: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_DRAWING_USER_ID_REQUEST:
      return {
        loading: true,
        drawingsByIdUser: [],
      };
    case actionTypes.GET_DRAWING_USER_ID_SUCCESS:
      return {
        loading: false,
        drawingsByIdUser: action.payload,
        success: true,
      };
    case actionTypes.GET_DRAWING_USER_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_DRAWING_USER_ID_RESET:
      return {
        drawingsByIdUser: [],
      };
    default:
      return state;
  }
};
