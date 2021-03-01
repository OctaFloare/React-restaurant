import {createStore} from "redux";
import {rootReducers} from "../../startup/reducers/index";

export const store = createStore(rootReducers);