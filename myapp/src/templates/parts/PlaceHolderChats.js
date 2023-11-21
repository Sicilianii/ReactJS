import Message from "./Message";
import Form from "./Form";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export default function PlaceHolderChats() {

    const [messageBody, setMessageBody] = useState(
        {
            text: '',
            author: ''
        }
    );

    let {userId} = useParams();
    let Chatt = useSelector(state => state.chats[userId - 1]);

    let ROBOT_MESSAGE = "Hey man, I got your message";


    // useEffect( () => {
    //     if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
    //         setTimeout(()=> {
    //             setMessageList(pervstate => [...pervstate, {text:ROBOT_MESSAGE, author:"robot"}])
    //         },1500)
    //
    //     }
    // },[Chatt.messages])

    return(
        <div className={'app-chat-place'}>
            <div className={'mess-list'}>
                <Message message={Chatt.messages}/>
            </div>
            <Form data={messageBody} setData={setMessageBody} idChat={userId} ></Form>
        </div>
    );
}