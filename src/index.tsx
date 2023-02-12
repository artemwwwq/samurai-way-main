import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/state";



export const RenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>,
        </BrowserRouter>,
        document.getElementById('root')
    )

};
RenderEntireTree()
store.subscribe(RenderEntireTree)