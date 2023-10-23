import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chats from "../templates/Chats";

function Routed() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={} element={Chats}></Route>
                <Route path={} element={}></Route>
                <Route path={} element={}></Route>
                <Route path={} element={}></Route>
            </Routes>
        </BrowserRouter>
    );
}