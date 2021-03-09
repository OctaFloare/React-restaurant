import * as yup from 'yup'
import {Record} from "immutable";

const SchemaState = yup.object().noUnknown()
    .shape({
        items: yup.object().noUnknown()
            .shape({
                data: yup.array()
                    .default([]), 
                status: yup.string()
                    .default('false')
    })
})

const makeState = data =>{
    const casted = new Record(SchemaState.cast(data))().toJS()
    
    return {...SchemaState.default(), ...casted}
}

export const sandwichMenuReducer =  (state = makeState(), action) =>{
    switch (action.type){
        case 'GET_ALL_SANDWICHES_API_ATTEMPT':

            return makeState({...state})
        case 'GET_ALL_SANDWICHES_API_SUCCESS':
            
            return makeState({...state, items: {data: [...action.payload.data], status: action.payload.success}})
            
        case 'GET_ALL_SANDWICHES_API_FAILURE':

            return makeState({...state, items: {status: 'false'}})
            
        default:
            return makeState({...state})
    }
}