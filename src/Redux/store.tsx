import {
    addPostActionCreator,
    profileReducer,
    updateNewPostActionCreator
} from "./Propfile-reducer";
import {dialogsReducer, onChangeNewMessageAC, updateMessageAC} from "./dialogs-reducer";

 type MessagesType = {
    id: number
    message: string
}

 type DialogsType = {
    id: number
    name: string
}

 type PostPropsType = {
    id: number
    message: string
    like: number
}

 type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}

 type MessagePageType = {

    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMassageText: string
}


 type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: MessagePageType
}


type StoreType = {
    _state: RootStateType
    _renderEntire: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: () => void
}






 /*const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are my posts! ', like: 12},
                {id: 2, message: 'Its my first post!', like: 18}
            ],
            newPostText: ''

        },

        dialogPage: {

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

    /!*dispatch() {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._renderEntire()
    }*!/
}*/











/*
{
    id: 1,
        followed: true,
    fullName: 'Artem',
    status: 'I am a BOSS',
    location: {city: 'Minsk', country: 'Belarus'}
},
{
    id: 2,
        followed: true,
    fullName: 'Alexey',
    status: 'I am a BOSS',
    location: {city: 'Russia', country: 'Moscow'}
},
{
    id: 3,
        followed: false,
    fullName: 'Tatyana',
    status: 'I am a BOSS',
    location: {city: 'Kiev', country: 'Ukraine'}
},
{
    id: 4,
        followed: false,
    fullName: 'Kirill',
    status: 'I am a BOSS',
    location: {city: 'Minsk', country: 'Belarus'}
},





*/




