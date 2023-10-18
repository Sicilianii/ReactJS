import Button from '@mui/material/Button';
import {useEffect, useRef} from "react";

function Form ({data, setData, setMessage, messageL}) {

    const {text, author} = data;
    const inputName = useRef(null);
    const inputText = useRef(null);

    useEffect(() => {
        if (text == '' && author =='') {
            inputText.current?.focus();
            inputName.current?.focus();
        }
    }, [messageL]);

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

    return (
        <form className="form" onSubmit={addMess} >
            <input className="form-intput" ref={inputName} placeholder="Name" value={author} onChange = {(e) => setData(p => ({...p, author: e.target.value}))}/>
            <input className="form-intput" ref={inputText} placeholder="Text" value={text} onChange = {(e) => setData(p => ({...p, text: e.target.value}))}/>
            <Button className={'form-reset-btn'} type={"reset"} variant="outlined">
                Delete
            </Button>
            <Button className={'form-submit-btn'} type={'submit'} variant="contained">
                Send
            </Button>
        </form>
    );
}

export default Form;