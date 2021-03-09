import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {rootReducers} from "../../startup/reducers/index";

export const store = createStore(rootReducers,applyMiddleware(thunk));