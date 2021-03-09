const initialState = {
    items: {
            data: [],
            status: 'false',
        }
}

export const sandwichMenuReducer =  (state = initialState, action) =>{
    switch (action.type){
        case 'GET_ALL_SANDWICHES_API_ATTEMPT':
            
            return {...state}
        case 'GET_ALL_SANDWICHES_API_SUCCESS':

            return {...state, items: {data: [...action.payload.data], status: action.payload.success}}
            
        case 'GET_ALL_SANDWICHES_API_FAILURE':

            return {...state, items: {status: 'false'}}
            
        default:
            return {...state}
    }
}