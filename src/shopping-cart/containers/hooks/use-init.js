import {useShoppingCartContext} from "./use-shopping-cart-context";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getRate} from "../../thunks/get-rate";

export const useInit = () => {
    const {setSelected} = useShoppingCartContext()
    const dispatch = useDispatch()
    useEffect(() => dispatch(getRate))
    useEffect(() => setSelected([]),[])
}