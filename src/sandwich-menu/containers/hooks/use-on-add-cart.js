import {useDispatch, useSelector} from "react-redux";
import {addItems} from "../../../shopping-cart/actions"

export const useOnAddCart = (selected, setSelected, selector) => {
    const dispatch = useDispatch()
    const data = useSelector(selector)
    const shoppingCartData = selected.map(selectIndex => data[selectIndex])
    
    return () => {
        dispatch(addItems(shoppingCartData))
        setSelected([])
    }
}