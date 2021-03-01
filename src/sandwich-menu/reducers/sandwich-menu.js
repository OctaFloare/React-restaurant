import {sandwichData} from "../data/sandwich-data";

const initialState = {
    items: []
}

export const sandwichMenuReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'GET_ALL_SANDWICHES':
            return {...state, items: sandwichData};
        default:
            return state;
    }
    
}