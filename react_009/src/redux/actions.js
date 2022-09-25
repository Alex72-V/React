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