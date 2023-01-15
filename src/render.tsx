import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { RootStateType, state} from "./Redux/state";

export const RenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App />,
        </BrowserRouter>,
        document.getElementById('root')
    )

};
RenderEntireTree(state)

