import React from "react";

function Form ({data, setData, setMessage}) {

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

export default Form;