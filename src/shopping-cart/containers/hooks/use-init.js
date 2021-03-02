import {useShoppingCartContext} from "./use-shopping-cart-context";
import {useEffect} from "react";

export const useInit = () => {
    const {setSelected} = useShoppingCartContext()
    useEffect(() => setSelected([]),[])
}