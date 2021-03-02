import {useDispatch, useSelector} from "react-redux";
import {removeItems} from "../../actions";

export const useDeleteSelectedRows = (selected, selector, setSelected) =>
{
    const shoppingCartData = useSelector(selector)
    const dispatch = useDispatch()
    const itemsToDelete = selected.map(item => shoppingCartData[item])
    
    return () => {
        dispatch(removeItems(itemsToDelete))
        setSelected([])
    }
}