import {useSandwichContext} from "./use-sandwich-context";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllSandwiches} from "../../actions";

export const useInit = () =>{
    const {setSelected} = useSandwichContext();
    const dispatch = useDispatch()
    useEffect(() => dispatch(getAllSandwiches()),[])
    useEffect(() => setSelected(() => []),[])
}