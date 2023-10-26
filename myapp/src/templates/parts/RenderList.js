import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import React, {useState} from "react";

export default function Render({List, SetList}) {

    return (
        List.map( (item,i) =>
            <ListItemButton sx={{ pl: 4 }} key={i}>
                <Link to={`/chats/${item.id}`}> {item.name} </Link>
            </ListItemButton>
        )
    );
}