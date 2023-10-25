import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, useMatch} from "react-router-dom";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Routed from "./Routing/Routed";
import Render from "./templates/parts/RenderList";


function App(pattern) {

    const [chatList, setchatList] = useState([
        {
            id: 1,
            name: 'Home chat'
        }
    ]);

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {setOpen(!open);};

    function addChats() {

    }

    return (
    <div className="App">
        <BrowserRouter>
            <List
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton>
                    <Link to={'/index'}>Главная</Link>
                </ListItemButton>
                <ListItemButton>
                    <Link to={'/profile'}>Profile</Link>
                </ListItemButton>
                <ListItemButton onClick={handleClick} className={'necrash'}>
                    <ListItemText primary="Chats" />
                </ListItemButton>
                <button className={'crush'} onClick={addChats}>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <Collapse in={open} timeout="auto" unmountOnExit>

                    <List component="div" disablePadding>
                        <Render List={chatList} setList={setchatList}/>
                    </List>
                </Collapse>
            </List>

            <div>
                <Routed/>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;


