import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { createTestReducer } from "./reducers/testReducers";

import {
  registerUserReducer,
  signinUserReducer,
} from "./reducers/usersReducers";

const reducer = combineReducers({
  createTest: createTestReducer,
  registerUser: registerUserReducer,
  signinUser: signinUserReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
