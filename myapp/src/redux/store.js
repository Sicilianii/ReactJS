import {applyMiddleware, compose, createStore,} from "redux";
import {profileReducer} from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const STORE = createStore(profileReducer, composeEnhancers(applyMiddleware()));