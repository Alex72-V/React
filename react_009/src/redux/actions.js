import * as types from './actionTypes';
import { auth } from '../services/firebase';

const regStart = () => (
    {
        type: types.REG_START
    }
)

const regSuccess = (user) => (
    {
        type: types.REG_SUCCESS,
        payload: user
    }
)

const regError = (error) => (
    {
        type: types.REG_ERROR,
        payload: error
    }
)

export const logStart = () => (
    {
        type: types.LOGIN_START
    }
)

export const logSuccess = (user) => (
    {
        type: types.LOGIN_SUCCESS,
        payload: user
    }
)

export const logError = (error) => (
    {
        type: types.LOGIN_ERROR,
        payload: error
    }
)

export const logoutStart = () => (
    {
        type: types.LOGOUT_START
    }
)

export const logoutSuccess = () => (
    {
        type: types.LOGOUT_SUCCESS
    }
)

export const logoutError = (error) => (
    {
        type: types.LOGOUT_ERROR,
        payload: error
    }
)


export const registerInintiate = (email, password, displayName) => {
    return(dispatch) => {
        dispatch(regStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({displayName
                })
                dispatch(regSuccess(user))
            })
            .catch((error) => dispatch(regError(error)))
    }
}

export const loginInitiate = (email, password) => {
    return(dispatch) => {
        dispatch(logStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(logSuccess(user))
            })
            .catch((error) => dispatch(logError(error)))
    }
}

export const logoutInitiate = () => {
    return(dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((error) => dispatch(logoutError(error)))
    }
}