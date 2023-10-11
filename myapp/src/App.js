import logo from './logo.svg';
import React, {useState} from "react";
function App() {
    const [messageList, setMessageList] = useState([]);
    const [messageBody, setMessageBody] = useState(
        {
            text: 'Vlados',
            author: 'Pisos'
        }
    );

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

    console.log(setMessage);
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

