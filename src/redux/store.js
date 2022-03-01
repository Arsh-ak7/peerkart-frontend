import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducers";
import { composeWithDevTools } from "redux-devtools-extension";
const reducers = combineReducers({ auth: authReducer });
const middleware = [thunk];
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
