import {configure} from "@testing-library/react";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        nameChats: 'Home Chat1',
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
        nameChats: 'Home Chat2',
        idChats: 2,
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
        nameChats: 'Home Chat3',
        idChats: 3,
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
        nameChats: 'Home Chat4',
        idChats: 4,
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
        idChats: 5,
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
        addChat: (state, action) => {},
        delChats: (state, action) => {
            return [...state.filter( el => el.idChats !== action.payload.id )];
        },
        addMessage: (state, action) => {}
    }
});

export const {addChats, delChats, addMessage} = ChatSlice.actions;
export const ChatsReducer = ChatSlice.reducer;
