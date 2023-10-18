import React from "react";
import App from "../App";

function Message({message}) {

    return (message.map( (mess, i) =>
        <div className="mess-block" key={i}>
            <h2 className="name">{mess.author}</h2>
            <p className="text-post">{mess.text}</p>
        </div>
    ));
}
export default Message;