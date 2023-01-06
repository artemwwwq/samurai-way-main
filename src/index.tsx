import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost} from "./Redux/state";




ReactDOM.render(
    <BrowserRouter>
        <App appState={state} addPost={addPost}/>,
    </BrowserRouter>,
document.getElementById('root')
)
;