import {useDispatch, useSelector} from "react-redux";
import {removeItems} from "../../actions";
import {useShoppingCartContext} from "./use-shopping-cart-context";

export const useDeleteSelectedRows = (selector) =>
{
    const {selected,setSelected} = useShoppingCartContext();
    const {shoppingCartData} = useSelector(selector)
    const dispatch = useDispatch()
    const itemsToDelete = {
        selectedDelete: selected,
        shoppingCartData: shoppingCartData,
    }
    
    return () => {
        dispatch(removeItems(itemsToDelete))
        setSelected([])
    }
}