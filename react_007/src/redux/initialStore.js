import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { chatReducer } from "./chatsReducer/chatReducer";
import { messageReducer } from "./messagesReducer/messageReducer";

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

const logger = createLogger({

    diff: true,
    collapsed: true

})


export const store = createStore(reducer, applyMiddleware(logger));