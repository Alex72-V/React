import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatReducer } from "./chatsReducer/chatReducer";
import { messageReducer } from "./messagesReducer/messageReducer";

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

const timer = store => next => action => {
    const delay = action?.meta?.delay
    if(!delay) {
        return next(action)
    }
    
    const timeout = setTimeout( () => next(action), delay)
    
    return () => {
        clearTimeout(timeout)
    }
}

export const store = createStore(reducer, applyMiddleware(timer));