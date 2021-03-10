import {useSandwichContext} from "./use-sandwich-context";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllSandwichApi} from "../../thunks/get-sandwiches"

export const useInit = () =>{
    const {setSelected} = useSandwichContext();
    const dispatch = useDispatch()
    useEffect(() => dispatch(getAllSandwichApi),[])
    useEffect(() => setSelected(() => []),[])
}