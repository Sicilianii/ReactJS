import logo from './logo.svg';
import React, {useState} from "react";
function App() {
    const [data, setData] = useState([]);
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
  return (
    <div className="App">
        <Form data={data} setData={setData} updateMess={updateMess}/>
        <Message message={message}/>
    </div>
  );
}
function Message({message}) {

    return (message.map( mess =>
        <div className="mess-block">
            <h2 className="name">{mess.name}</h2>
            <p className="text-post">{mess.author}</p>
        </div>
    ));
}

function Form(data, setData, updateMess) {
    const {text, author} = data;
    function addMess(ev) {
        ev.preventDefault();
        if (text.length > 0) {
            updateMess(per => [...per, {text,author}])
        }
        setData({
            text: '',
            author: ''
        })
    }
    return (<form className="form" onSubmit={event => {addMess()}} >
        <input className="form-intput" value={text} onChange={(e) => setData(p => ({...p, text: e.target.value}))}/>
        <input className="form-intput" value={author} onChange={(e) => setData(p => ({...p, author: e.target.value}))}/>
        <button type="submit">ADD</button>
    </form>);
}
export default App;
