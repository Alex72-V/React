import * as types from '../actionTypes';



const initialState = {
    loading: false,
    error: null,
    currentUser: null
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REG_START:
            return {
                ...state,
                loading: true,
            }
        case types.REG_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case types.REG_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}