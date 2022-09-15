import { combineReducers, createStore } from "redux";
import { chatReducer } from "./chatsReducer/chatReducer";
import { messageReducer } from "./messagesReducer/messageReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

const persisterReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persisterReducer);
export const persist = persistStore(store)