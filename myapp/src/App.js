import logo from './logo.svg';
import React, {useState} from "react";
function App() {
    const [messageList, setMessageList] = useState([
        {
            text: 'Text somethink',
            author: 'Vlados'
        }
    ]);

  return (
    <div className="App">
        <Form setMessage={setMessageList}></Form>
        <Message message={messageList}/>
    </div>
  );
}
function Message({message}) {

    return (message.map( mess =>
        <div className="mess-block">
            <h2 className="name">{mess.author}</h2>
            <p className="text-post">{mess.text}</p>
        </div>
    ));
}

function Form(updateMess) {
    const [messageBody, setMessageBody] = useState({});
    const {text, author} = messageBody;


    function addMess(ev) {
        ev.preventDefault();
        if (text.length > 0) {
            updateMess(per => [...per, {text,author}])
        }
        setMessageBody({
            text: '',
            author: ''
        })
    }


    return (<form className="form" onSubmit={(event) => addMess(event) } >
        <input className="form-intput" value={text} onChange={(e) => setMessageBody(p => ({...p, text: e.target.value}))}/>
        <input className="form-intput" value={author} onChange={(e) => setMessageBody(p => ({...p, author: e.target.value}))}/>
        <button type="submit">ADD</button>
    </form>);
}
export default App;
