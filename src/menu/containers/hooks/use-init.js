import {useMenuContext} from "./use-menu-context";
import {foodData} from '../../data/food'
import {useEffect} from "react";

export const useInit = () => {
    const {setData} = useMenuContext()
    useEffect(() => setData(() => foodData),[])
}