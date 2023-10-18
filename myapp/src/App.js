import React, {useEffect, useState} from "react";
import Message from "./templates/Message";
import Form from "./templates/Form";
import Chats from "./templates/Chats";
function App() {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setchatList] = useState([
        {
            id: 1,
            name: 'Home chat'
        }
    ]);
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

    return (
    <div className="App">
        <Chats className={'main'} />
        <div className={'app-chat-place'}>
            <div className={'mess-list'}>
                <Message message={messageList}/>
            </div>
            <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} messageL={messageList}></Form>
        </div>
    </div>
  );
}

export default App;


