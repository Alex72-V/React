import * as types from '../actionTypes';



const initialState = {
    loading: false,
    error: null,
    currentUser: null
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_START:
        case types.LOGOUT_START:
        case types.REG_START:
            return {
                ...state,
                loading: true,
            }
        case types.REG_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case types.LOGOUT_ERROR:
        case types.LOGIN_ERROR:
        case types.REG_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}