import {configure} from "@testing-library/react";
import {createSlice, current} from "@reduxjs/toolkit";

const initialState = [
    {
        nameChats: 'Home Chat',
        idChats: 1,
        messages: [
            {
                author: 'Mom',
                mess: 'fuck off!'
            },
            {
                author: 'Dady',
                mess: 'Ye!'
            }
        ]
    },
    {
        nameChats: 'Work Chat',
        idChats: 2,
        messages: [
            {
                author: 'Bob',
                mess: 'Hello!'
            },
            {
                author: 'Mike',
                mess: 'Hi!'
            }
        ]
    }

];

const ChatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        addChat: (state, action) => {
            state.push({
            nameChats: action.payload.nameChat.name,
            idChats: state.length + 1,
            messages: []
        })},
        delChats: (state, action) => {
            return [...state.filter( el => el.idChats !== action.payload.id )];
        },
        addMessage: (state, action) => {
            state[action.payload.id].messages.push({
                author: action.payload.mes.a,
                mess: action.payload.mes.t
            })
        }
    }
});

export const {addChat, delChats, addMessage} = ChatSlice.actions;
export const ChatsReducer = ChatSlice.reducer;
