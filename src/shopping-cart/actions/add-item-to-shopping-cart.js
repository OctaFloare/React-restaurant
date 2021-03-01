export const ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART'
export const REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART'


export const addItemToShoppingCart = item => ({type: ADD_ITEM_TO_SHOPPING_CART, payload: item})
export const removeItemFromShoppingCart = remainingItems => 
    ({type: REMOVE_ITEM_FROM_SHOPPING_CART, payload: remainingItems})