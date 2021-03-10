import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getRateAttempt} from "../../actions";

export const useInit = () => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(getRateAttempt()))
}