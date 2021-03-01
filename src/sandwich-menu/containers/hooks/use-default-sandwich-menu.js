import {useState} from "react";

export const useDefaultSandwichMenu = () => {
    const [data, setData] = useState([])
    const [shoppingCartData, setShoppingCartData] = useState([])
    return {data, setData , shoppingCartData, setShoppingCartData}
}