
import {ChatsReducer} from "../slices/slice";
import {configureStore} from "@reduxjs/toolkit";

export const STORE = configureStore({
    reducer: {
        chats: ChatsReducer
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());