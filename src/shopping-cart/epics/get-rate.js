import {ofType} from "redux-observable";
import {GET_RATE_API_ATTEMPT, getRateFailure, getRateSuccess} from "../actions";
import {mergeMap, map, tap, catchError} from "rxjs/operators";
import axios from "axios";
import {from} from "rxjs";

export const getRateEpic = action$ => action$
    .pipe(ofType(GET_RATE_API_ATTEMPT))
    .pipe(mergeMap(() => axios.get('https://octa-api.herokuapp.com/rate')))
    .pipe(map(response => getRateSuccess(response)))
    .pipe(catchError(err => from([getRateFailure()])))