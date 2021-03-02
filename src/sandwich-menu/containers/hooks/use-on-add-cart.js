import {useDispatch, useSelector} from "react-redux";
import {addItems} from "../../../shopping-cart/actions"
import {useSandwichContext} from "./use-sandwich-context";

export const useOnAddCart = (selector) => {
    const {selected, setSelected} = useSandwichContext()
    const dispatch = useDispatch()
    const data = useSelector(selector)
    const shoppingCartData = selected.map(selectIndex => data[selectIndex])
    
    return () => {
        dispatch(addItems(shoppingCartData))
        setSelected([])
    }
}