export const useSetTotalPrice = (shoppingCartData) =>
{
    let totalPrice=0
    shoppingCartData.map(item => totalPrice+= item.price)
    
    return totalPrice;
}