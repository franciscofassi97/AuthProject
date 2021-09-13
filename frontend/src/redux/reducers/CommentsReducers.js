import * as actionTypes from "../constants/commentsConstants";

export const createCommentReducer = (state = { comment: {} }, action) => {
  switch (action.type) {
    case actionTypes.COMENT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.COMENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        comment: action.payload,
      };
    case actionTypes.COMENT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.COMENT_CREATE_REST:
      return { comment: {} };
    default:
      return state;
  }
};
