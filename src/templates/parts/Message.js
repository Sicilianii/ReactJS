import React from "react";
import {useSelector} from "react-redux";

function Message({message}) {

    return (
        message.map( (mess, i) =>
        <div className="mess-block" key={i}>
            <h2 className="name">{mess.author}</h2>
            <p className="text-post">{mess.mess}</p>
        </div>)
    );
}
export default Message;