import Message from "./Message";
import Form from "./Form";
import React, {useEffect, useState} from "react";

export default function PlaceHolderChats() {

    const [messageList, setMessageList] = useState([]);
    const [messageBody, setMessageBody] = useState(
        {
            text: '',
            author: ''
        }
    );

    let ROBOT_MESSAGE = "Hey man, I got your message";

    useEffect( () => {
        if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
            setTimeout(()=> {
                setMessageList(pervstate => [...pervstate, {text:ROBOT_MESSAGE, author:"robot"}])
            },1500)
        }
    },[messageList])

    return(
        <div className={'app-chat-place'}>
            <div className={'mess-list'}>
                <Message message={messageList}/>
            </div>
            <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} messageL={messageList}></Form>
        </div>
    );
}