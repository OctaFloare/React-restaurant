import {ofType} from "redux-observable";
import {catchError, map, mergeMap} from "rxjs/operators"
import {GET_ALL_SANDWICHES_API_ATTEMPT, getItemsApiFailure, getItemsApiSuccess} from "../actions";
import axios from "axios";
import {from} from "rxjs";

export const sandwichMenuEpic = action$ => action$
        .pipe(ofType(GET_ALL_SANDWICHES_API_ATTEMPT))
        .pipe(mergeMap(() => axios.get('https://octa-api.herokuapp.com/')))
        .pipe(map(response => getItemsApiSuccess(response.data)))
        .pipe(catchError(error => from([getItemsApiFailure()])));