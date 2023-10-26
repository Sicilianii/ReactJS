import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chats from "../templates/parts/Chats";
import IndexX from "../templates/pages/Index";
import NotFound from "../templates/pages/404";
import Profile from "../templates/pages/Profile";
import PlaceHolderChats from "../templates/parts/PlaceHolderChats";

export default function  Routed() {
    return(
        <>
            <Routes>
                <Route path={'/index'} element={ <IndexX /> }></Route>
                <Route path={'/chats/*'} element={ <PlaceHolderChats/> }></Route>
                <Route path={'*'} element={ <NotFound /> }></Route>
                <Route path={'/profile'} element={ <Profile /> }></Route>
            </Routes>
        </>
    );
}