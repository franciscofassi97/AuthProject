import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Comments Reducers
import { createCommentReducer } from "./reducers/commentsReducers";
//Drawings reducers
import {
  uploadDrawingReducer,
  getDrawingsByIdUserReducer,
  getDrawingByIdReducer,
} from "./reducers/drawingsReducers";
//Users Reducers
import {
  signinUserReducer,
  getAllUsersReducer,
  getUserByIdReducer,
} from "./reducers/usersReducers";

const reducer = combineReducers({
  getUserById: getUserByIdReducer,
  getDrawingById: getDrawingByIdReducer,
  getDrawingsByIdUser: getDrawingsByIdUserReducer,
  getAllUsers: getAllUsersReducer,
  uploadDrawing: uploadDrawingReducer,
  createComment: createCommentReducer,
  signinUser: signinUserReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
