import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Propfile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";



const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile />}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
