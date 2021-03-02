import {useDispatch, useSelector} from "react-redux";
import {addItems} from "../../../shopping-cart/actions"
import {useSandwichContext} from "./use-sandwich-context";

export const useOnAddCart = (selector) => {
    const {selected, setSelected} = useSandwichContext()
    const data = useSelector(selector)
    const dispatch = useDispatch()
    const itemsToAdd = {
        data: data,
        selectedAdd: selected
    }
    
    return () => {
        dispatch(addItems(itemsToAdd))
        setSelected([])
    }
}