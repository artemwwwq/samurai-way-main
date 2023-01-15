import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Propfile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, state} from './Redux/state'










function App() {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile posts={state.profilePage.posts} addPost={addPost}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs dialogs={state.messagePage.dialogs}
                                                                  messages={state.messagePage.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
