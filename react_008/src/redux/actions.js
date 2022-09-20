import { ERROR_POSTS, LOAD_POSTS } from "./actionTypes";

export const loadStart = () => (
    {
        type:  LOAD_POSTS 
    }
)

export const errorPosts = (error) => (
    {
        type:  ERROR_POSTS,
        payload: error.toString()
    }
)