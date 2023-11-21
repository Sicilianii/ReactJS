import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Chats from "../templates/parts/Chats";
import IndexX from "../templates/pages/Index";
import NotFound from "../templates/pages/404";
import Profile from "../templates/pages/Profile";
import PlaceHolderChats from "../templates/parts/PlaceHolderChats";

export default function  Routed() {


    return(
        <>
            <Routes>
                <Route  path={'/'}>
                    <Route  path={'/'} element={<IndexX />}></Route>
                    <Route  path={'/index'} element={ <IndexX /> }></Route>
                    <Route path={'/chats'}>
                        <Route path=":userId" element={ <PlaceHolderChats/> }></Route>
                    </Route>
                    <Route path={'/profile'} element={ <Profile /> }></Route>
                </Route>
                <Route path={'*'} element={ <NotFound /> }></Route>
            </Routes>
        </>
    );
}