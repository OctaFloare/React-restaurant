import {combineReducers} from "redux";
import {shoppingCartReducer} from "../../shopping-cart/reducers/shopping-cart";
import {sandwichMenuReducer} from "../../sandwich-menu/reducers/sandwich-menu";

export const rootReducers = combineReducers({
    shoppingCartReducer, sandwichMenuReducer
})