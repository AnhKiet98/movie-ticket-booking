import { applyMiddleware, combineReducers, createStore } from "redux";
import { QuanLyLoginReducer } from './Reducers/QuanLyLoginReducer'
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  QuanLyLoginReducer: QuanLyLoginReducer
  // Reducer khai báo tại đây
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
