const initialState = {
    items: []
}

export const shoppingCartReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_ITEM_TO_SHOPPING_CART':
            const {data, selectedAdd} = action.payload;
            const itemsToAdd = selectedAdd.map(selectIndex => data[selectIndex])
            
            return {...state , items: [...state.items, ...itemsToAdd]}
            
        case 'REMOVE_ITEM_FROM_SHOPPING_CART':
            const {selectedDelete, shoppingCartData} = action.payload
            const itemsToDelete = selectedDelete.map(item => shoppingCartData[item])
            
            return {...state, items: state.items.filter(item => !itemsToDelete.includes(item))}
            
        default:
            return state;
    }
}