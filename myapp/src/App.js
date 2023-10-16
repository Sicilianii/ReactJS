import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import Message from "./templates/Message";
import Form from "./templates/Form";
function App() {
    const [messageList, setMessageList] = useState([]);
    const [messageBody, setMessageBody] = useState(
        {
            text: 'Vlados',
            author: 'Pisos'
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
        <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
        <Message message={messageList}/>
    </div>
  );
}

export default App;


