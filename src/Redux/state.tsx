
export type StoreType = {
    _state: RootStateType
    _renderEntire: ()=> void
    addPost: ()=>void
    updateNewPostText: (newText: string)=> void
    subscribe: (observer: ()=> void)=> void
    getState: ()=> RootStateType
}

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
            newMassageText: '',
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
            ]
        },


    },
    _renderEntire() {

    },
    addPost() {
        let newPost : PostPropsType = {
            id: 5,
            message: store._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.posts.push(newPost)
        this.updateNewPostText('')
        this._renderEntire()
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText;
        this._renderEntire()
    },
    subscribe (observer: ()=> void) {
        this._renderEntire = observer
    },

    getState() {
        return this._state
    }
}




export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostPropsType ={
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














