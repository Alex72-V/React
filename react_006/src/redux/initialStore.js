import { combineReducers, createStore } from "redux";
import { chatReduser } from "./chatsReduser/chatReduser";
import { messageReduser } from "./messagesReducer/messageReducer";


export const reduser = combineReducers(
    {
    chats: chatReduser,
    messages: messageReduser

})


export const store = createStore();