import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addChat} from "../../slices/slice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalForm({List , setChats}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispacth = useDispatch();

    const [prepareChat, SetPrepareChat] = useState({
        name: ''
    });


    function addChats(ev) {
        ev.preventDefault();
        dispacth( addChat( {nameChat: prepareChat} ) );
        handleClose();
    }

    return (
        <div>
            <button className={'crush'} onClick={handleOpen}>
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <form onSubmit={addChats}>
                       <input type="text" placeholder={'Название чата'} onChange={ (e) => {SetPrepareChat(perv => ({...perv, name: e.target.value }))}}/>
                       <button type={'submit'}>Добавить чат</button>
                   </form>
                </Box>
            </Modal>
        </div>
    );
}