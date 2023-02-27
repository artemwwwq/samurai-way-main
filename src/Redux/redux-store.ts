import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer, updateNewPostActionCreator} from "./Propfile-reducer";
import {dialogsReducer, onChangeNewMessageAC, updateMessageAC} from "./dialogs-reducer";


type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostActionCreator>
type addNewMessageType = ReturnType<typeof onChangeNewMessageAC>
type sendMessageType = ReturnType<typeof updateMessageAC>
export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType | addNewMessageType | sendMessageType



const rootReducer = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

