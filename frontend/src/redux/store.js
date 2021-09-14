import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { createCommentReducer } from "./reducers/commentsReducers";
import { uploadDrawingReducer } from "./reducers/drawingsReducers";
import {
  registerUserReducer,
  signinUserReducer,
} from "./reducers/usersReducers";

const reducer = combineReducers({
  uploadDrawing: uploadDrawingReducer,
  createComment: createCommentReducer,
  registerUser: registerUserReducer,
  signinUser: signinUserReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
