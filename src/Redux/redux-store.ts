import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer, updateNewPostActionCreator} from "./Propfile-reducer";
import {dialogsReducer, onChangeNewMessageAC, updateMessageAC} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    setTotalUserCount,
    unFollow,
    usersReducer
} from "./Users-reducer";


type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostActionCreator>
type addNewMessageType = ReturnType<typeof onChangeNewMessageAC>
type sendMessageType = ReturnType<typeof updateMessageAC>
type follow = ReturnType<typeof follow>
type unFollow = ReturnType<typeof unFollow>
type setUsers = ReturnType<typeof setUsers>
type setCurrentPage = ReturnType<typeof setCurrentPage>
type setTotalUserCount = ReturnType<typeof setTotalUserCount>
type toggleIsFetching = ReturnType<typeof toggleIsFetching>
export type ActionTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | addNewMessageType
    | sendMessageType
    | follow
    | unFollow
    | setUsers
    | setCurrentPage
    | setTotalUserCount
    | toggleIsFetching


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

