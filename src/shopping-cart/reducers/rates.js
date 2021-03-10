import * as yup from "yup"
import {Record} from "immutable";

const SchemaState = yup.object().noUnknown()
    .shape({
        rate: yup.number().default(0),
        status: yup.string().default('false')
    })

const makeState = data =>{
    const casted = new Record(SchemaState.cast(data))().toJS()
    
    return {...SchemaState.default(),...casted}
}

export const ratesReducer = (state = makeState(), action) => {
    switch(action.type){
        case 'GET_RATE_API_ATTEMPT':
            
            return makeState({...state})
        case 'GET_RATE_API_SUCCESS':
            
            return makeState({...state, rate: action.payload.data.value, status: action.payload.data.success})
        case 'GET_RATE_API_FAILURE':
            
            return makeState({...state, status: 'false'})
            
        default:
            return makeState({...state})
    }
}