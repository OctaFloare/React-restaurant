import {Menu} from "../components/sandwich-menu";
import {useDefaultSandwichMenu} from "./hooks/use-default-sandwich-menu";
import {InitBehaviour} from "./init-behaviour";
import {SandwichContext} from "./context";

export const SandwichMenu = () => <SandwichContext.Provider value={useDefaultSandwichMenu()}>
    <InitBehaviour />
    <Menu />
</SandwichContext.Provider>