import React, { useState } from 'react';
import Form from "./Form";
function Message() {

    const [message, updateMess] = useState([
        {
            nameAuthor: 'Alex',
            message: 'Hello my friends!'
        },
        {
            nameAuthor: 'Jon',
            message: 'Hi, Alex!'
        },
        {
            nameAuthor: 'Bidon',
            message: 'How are you?'
        }
    ]);
    return (message.map( mess =>
        <div className="mess-block">
            <h2 className="name">{mess.nameAuthor}</h2>
            <p className="text-post">{mess.message}</p>
        </div>
    ));
}
export default Message;