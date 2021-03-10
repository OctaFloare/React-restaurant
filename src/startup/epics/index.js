import {combineEpics} from 'redux-observable'
import {sandwichMenuEpic} from "../../sandwich-menu/epics/sandwich-menu";
import {getRateEpic} from "../../shopping-cart/epics/get-rate"; 

export const rootEpic = combineEpics(
    sandwichMenuEpic, getRateEpic
);