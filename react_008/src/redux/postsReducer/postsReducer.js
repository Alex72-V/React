import { errorPosts, loadStart } from "../actions"
import { ERROR_POSTS, GET_POSTS, LOAD_POSTS } from "../actionTypes"

const initialState = {
    posts: [],
    loading: false,
    error: null,
}


export const postsReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_POSTS:
            return {
                ...state,
                loading: true
            }

        case GET_POSTS: 
            return {
                ...state,
                posts: action.payload,
                loading: false
        }
        
        case ERROR_POSTS:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state
    }
}

export const getPosts = () => {
    return async dispatch => {
        dispatch(loadStart())
        try {
            
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();
        dispatch({
            type: GET_POSTS, payload: data
        })
        } catch (e) {
            dispatch(errorPosts(e))
        }
    }
}