import {getItemsApiAttempt, getItemsApiFailure, getItemsApiSuccess} from "../actions";
import axios from "axios";

export const getAllSandwichApi = async (dispatch) => {
    dispatch(getItemsApiAttempt())
    await axios.get('https://octa-api.herokuapp.com/')
        .then(data => dispatch(getItemsApiSuccess(data.data)))
        .catch(() => dispatch(getItemsApiFailure()))
}