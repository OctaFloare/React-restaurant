import {ShoppingCartContext} from "./context";
import {ShoppingCartComponent} from "../components/shopping-cart";
import {useDefaultShoppingCart} from "./hooks/use-default-shopping-cart";
import {InitBehaviour} from "./init-behaviour";

export const ShoppingCart = () => <ShoppingCartContext.Provider value={useDefaultShoppingCart()}>
<InitBehaviour />
<ShoppingCartComponent />
</ShoppingCartContext.Provider>