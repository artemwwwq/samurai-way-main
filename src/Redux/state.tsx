import {
    addPostActionCreator,
    profileReducer,
    updateNewPostActionCreator
} from "./Propfile-reducer";
import {dialogsReducer, onChangeNewMessageAC, updateMessageAC} from "./dialogs-reducer";

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostPropsType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}

export type MessagePageType = {

    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMassageText: string
}


export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}


export type StoreType = {
    _state: RootStateType
    _renderEntire: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}


type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostActionCreator>
type addNewMessageType = ReturnType<typeof onChangeNewMessageAC>
type sendMessageType = ReturnType<typeof updateMessageAC>

export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType | addNewMessageType | sendMessageType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are my posts! ', like: 12},
                {id: 2, message: 'Its my first post!', like: 18}
            ],
            newPostText: ''

        },

        messagePage: {

            messages: [
                {id: 1, message: 'Hi, my dear friend'},
                {id: 2, message: 'I switch you questions for special'},
                {id: 3, message: 'Hi, my dear friend'},
                {id: 4, message: 'Hi, my dear friend'},
                {id: 5, message: 'Hi, my dear friend'},
                {id: 6, message: 'I LOVE U'}
            ],
            dialogs: [
                {id: 1, name: 'Artem'},
                {id: 2, name: 'Alexey'},
                {id: 3, name: 'Kiril'},
                {id: 4, name: 'Ivan'},
                {id: 5, name: 'Igor'},
                {id: 6, name: 'Ekaterina'}
            ],
            newMassageText: '',
        },


    },
    _renderEntire() {
        console.log('render')
    },
    subscribe(observer: () => void) {
        this._renderEntire = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._renderEntire()
    }
}





















