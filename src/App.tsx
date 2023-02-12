import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Propfile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from './Redux/state'

type StorePropsType = {
    store: StoreType
}

const App: React.FC<StorePropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile profilePage={props.store._state.profilePage}
                                                                  addPost={props.store.addPost.bind(props.store)}
                                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs messagePage={props.store._state.messagePage}

                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
