import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Propfile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostPropsType} from "./components/Propfile/MyPosts/Post/Posts";
import {addPost} from "./Redux/state";

export type IndexPropsType = {
    appState: {
        profilePage: {
            posts: Array<PostPropsType>
        }
        messagePage: {
            messages: Array<MessagesType>
            dialogs: Array<DialogsType>
        }


    }
    addPost: (postMessage: string)=> void
}




    export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}


function App(props: IndexPropsType) {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile posts={props.appState.profilePage.posts} addPost={props.addPost}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs dialogs={props.appState.messagePage.dialogs}
                                                                  messages={props.appState.messagePage.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
