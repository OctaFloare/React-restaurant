const initialState = {
    rate: 0,
    status: 'false'
}

export const ratesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_RATE_API_ATTEMPT':
            
            return {...state}
        case 'GET_RATE_API_SUCCESS':
            
            return {...state, rate: action.payload.data.value, status: action.payload.data.success}
        case 'GET_RATE_API_FAILURE':
            
            return {...state, status: 'false'}
            
        default:
            return {...state}
    }
}