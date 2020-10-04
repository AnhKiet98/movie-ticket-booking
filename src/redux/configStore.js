import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  // Reducer khai báo tại đây
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
