import {getRateAttempt, getRateFailure, getRateSuccess} from "../actions";
import axios from "axios";

export const getRate = async (dispatch) => {
    dispatch(getRateAttempt())
    await axios.get('https://octa-api.herokuapp.com/rate')
        .then(rate => dispatch(getRateSuccess(rate)))
        .catch(() => dispatch(getRateFailure()))
}