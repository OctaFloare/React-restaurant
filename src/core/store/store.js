import {createStore, applyMiddleware} from "redux";
import {rootReducers} from "../../startup/reducers/index";
import {createEpicMiddleware} from 'redux-observable'
import {rootEpic} from "../../startup/epics";

export const configureStore = () => {
    const epicMiddleWare = createEpicMiddleware();
    const store = createStore(rootReducers, applyMiddleware(epicMiddleWare));
    epicMiddleWare.run(rootEpic)
    return store;
}