import {MenuContext} from "./context";
import {useDefaultMenuContext} from "./hooks/use-defaul-menu-context";
import {InitBehaviour} from "./init-behaviour";
import {Menu} from "../components/menu";

export const FoodMenu = () =>
    <MenuContext.Provider value={useDefaultMenuContext()}>
        <InitBehaviour />
        <Menu/>
    </MenuContext.Provider>