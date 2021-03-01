const initialState = {
    items: []
}

export const shoppingCartReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_ITEM_TO_SHOPPING_CART':
            return {...state , items: [...state.items, ...action.payload]}
        case 'REMOVE_ITEM_FROM_SHOPPING_CART':
            return {...state, items: state.items.filter(item => !action.payload.includes(item))}
        default:
            return state;
    }
}