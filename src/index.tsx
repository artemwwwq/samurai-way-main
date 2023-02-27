import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/redux-store";
import {Provider} from "react-redux";




export const RenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />,
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )

};
RenderEntireTree()
store.subscribe(RenderEntireTree)