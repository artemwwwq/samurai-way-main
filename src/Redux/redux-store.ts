import {combineReducers, createStore, Store} from "redux";
import {addPostActionCreator, profileReducer, updateNewPostActionCreator} from "./Propfile-reducer";
import {dialogsReducer, onChangeNewMessageAC, updateMessageAC} from "./dialogs-reducer";



const reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer
})

export type RootReducerType = typeof reducers

export type ReduxStoreType = typeof store


export const store = createStore(reducers)