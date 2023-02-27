import {combineReducers, createStore, Store} from "redux";
import {addPostActionCreator, profileReducer, updateNewPostActionCreator} from "./Propfile-reducer";
import {dialogsReducer, onChangeNewMessageAC, updateMessageAC} from "./dialogs-reducer";



const rootReducer = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>




export const store = createStore(rootReducer)