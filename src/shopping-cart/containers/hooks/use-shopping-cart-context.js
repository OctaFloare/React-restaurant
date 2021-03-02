import {useContext} from "react";
import {ShoppingCartContext} from "../context";

export const useShoppingCartContext = () => useContext(ShoppingCartContext)