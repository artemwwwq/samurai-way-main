import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Propfile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {ReduxStoreType} from "./Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type StorePropsType = {
   store: ReduxStoreType
}

const App: React.FC<StorePropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
