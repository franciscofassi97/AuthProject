import * as actionTypes from "../constants/testConstants";

export const createTestReducer = (state = { test: {} }, action) => {
  switch (action.type) {
    case actionTypes.TEST_CREATE_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.TEST_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        test: action.payload,
      };
    case actionTypes.TEST_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.TEST_CREATE_REST:
      return {};
    default:
      return state;
  }
};
