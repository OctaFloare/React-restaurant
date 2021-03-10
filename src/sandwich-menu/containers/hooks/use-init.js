import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getItemsApiAttempt} from "../../actions";

export const useInit = () =>{
    const dispatch = useDispatch()
    useEffect(() => dispatch(getItemsApiAttempt()),[dispatch])
}