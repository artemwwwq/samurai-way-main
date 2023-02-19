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


type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type addNewMessageType = {
    type: 'ADD-NEW-MESSAGE'
    body: string
}

type sendMessageType = {
    type: 'UPDATE-MESSAGE'
}

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'





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

    },
    subscribe(observer: () => void) {
        this._renderEntire = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostPropsType = {
                id: 5,
                message: store._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._renderEntire()
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._renderEntire()
        } else if (action.type === ADD_NEW_MESSAGE) {
            this._state.messagePage.newMassageText = action.body
            this._renderEntire()
        } else if (action.type === UPDATE_MESSAGE) {
            let newMessage = this._state.messagePage.newMassageText
            this._state.messagePage.newMassageText = ''
            this._state.messagePage.messages.push({id: 7, message: newMessage})
            this._renderEntire()
        }

    }
}


export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST,
        newText: newText
    }
}

export const onChangeNewMessageAC = (newTextMessage: string): addNewMessageType => {
    return {
        type: ADD_NEW_MESSAGE,
        body: newTextMessage
    }
}

export const updateMessageAC = (): sendMessageType => {
    return {
        type: UPDATE_MESSAGE,
    }
}




















