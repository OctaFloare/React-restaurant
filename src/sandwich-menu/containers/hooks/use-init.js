import {useSandwichContext} from "./use-sandwich-context";
import {useEffect} from "react";

export const useInit = () =>{
    const {setData} = useSandwichContext();
    useEffect(() => setData(() => []),[])
}