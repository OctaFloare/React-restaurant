import * as yup from "yup"
import {Record} from "immutable";

const SchemaState = yup.object().noUnknown()
    .shape({
        items: yup.array()
            .default([])
    })

const makeState = data => {
    const casted = new Record(SchemaState.cast(data))().toJS()
    
    return {...SchemaState.default(), ...casted}
}

export const shoppingCartReducer = (state = makeState(), action) =>{
    switch (action.type){
        case 'ADD_ITEM_TO_SHOPPING_CART':
            const {data, selectedAdd} = action.payload;
            const itemsToAdd = selectedAdd.map(selectIndex => data[selectIndex])
            
            return makeState({...state , items: [...state.items, ...itemsToAdd]})
            
        case 'REMOVE_ITEM_FROM_SHOPPING_CART':
            const {selectedDelete, shoppingCartData} = action.payload
            const itemsToDelete = selectedDelete.map(item => shoppingCartData[item])
            
            return makeState({...state, items: state.items.filter(item => !itemsToDelete.includes(item))})
            
        default:
            return makeState({...state});
    }
}