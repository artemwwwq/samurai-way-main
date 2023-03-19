import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer, updateNewPostActionCreator} from "./Propfile-reducer";
import {dialogsReducer, onChangeNewMessageAC, updateMessageAC} from "./dialogs-reducer";
import {followAC, setCurrentPageAC, setUsersAC, setUserTotalCountAC, unFollowAC, usersReducer} from "./Users-reducer";


type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostActionCreator>
type addNewMessageType = ReturnType<typeof onChangeNewMessageAC>
type sendMessageType = ReturnType<typeof updateMessageAC>
type follow = ReturnType<typeof followAC>
type unFollow = ReturnType<typeof unFollowAC>
type setUsers = ReturnType<typeof setUsersAC>
type setCurrentPage = ReturnType<typeof setCurrentPageAC>
type setTotalUserCount = ReturnType<typeof setUserTotalCountAC>
export type ActionTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | addNewMessageType
    | sendMessageType
    | follow
    | unFollow
    | setUsers
    | setCurrentPage
    | setTotalUserCount



const rootReducer = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    usersPage: usersReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

