import Button from '@mui/material/Button';
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {addMessage} from "../../slices/slice";

function Form ({data, setData, idChat}) {

    const dispath = useDispatch();

    const {text, author} = data;
    const inputName = useRef(null);
    const inputText = useRef(null);

    // useEffect(() => {
    //     if (text == '' && author =='') {
    //         inputText.current?.focus();
    //         inputName.current?.focus();
    //     }
    // }, [messageL]);

    function addMess(ev) {
        ev.preventDefault();
        if (text.length > 0) {
            dispath( addMessage({
                id: idChat - 1,
                mes: {
                    t: text,
                    a: author
                }
            }) )
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