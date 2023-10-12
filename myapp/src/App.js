import logo from './logo.svg';
import React, {useEffect, useState} from "react";
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
function Message({message}) {

    return (message.map( mess =>
        <div className="mess-block">
            <h2 className="name">{mess.author}</h2>
            <p className="text-post">{mess.text}</p>
        </div>
    ));
}

function Form  ({data, setData, setMessage}) {

    const {text, author} = data;

    function addMess(ev) {
        ev.preventDefault();
        if (text.length > 0) {
            setMessage(per => [...per, {text,author}])
        }
        setData({
            text: '',
            author: ''
        })
    }


    return (<form className="form" onSubmit={addMess} >
        <input className="form-intput" placeholder="Name" value={text} onChange = {(e) => setData(p => ({...p, text: e.target.value}))}/>
        <input className="form-intput" placeholder="Text" value={author} onChange={(e) => setData(p => ({...p, author: e.target.value}))}/>
        <button type="submit">ADD</button>
    </form>);
}

