import React from "react";
import App from "../App";

function Message({message}) {

    return (message.map( mess =>
        <div className="mess-block">
            <h2 className="name">{mess.author}</h2>
            <p className="text-post">{mess.text}</p>
        </div>
    ));
}
export default Message;