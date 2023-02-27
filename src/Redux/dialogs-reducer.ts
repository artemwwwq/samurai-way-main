import {ActionTypes} from "./redux-store";


export const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
export const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

const initialState = {

    messages: [
        {id: 1, message: 'Hi, my dear friend'},
        {id: 2, message: 'I switch you questions for special'},
        {id: 3, message: 'Hi, my dear friend'},
        {id: 4, message: 'Hi, my dear friend'},
        {id: 5, message: 'Hi, my dear friend'},
        {id: 6, message: 'I LOVE U'}
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Kiril'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Igor'},
        {id: 6, name: 'Ekaterina'}
    ] as Array<DialogsType>,
    newMassageText: '',
}

export type initialStateType = typeof initialState



export const dialogsReducer = (state:initialStateType = initialState, action: ActionTypes): initialStateType => {


    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return  {...state,
                newMassageText: action.body
            }

        case UPDATE_MESSAGE: {
            let newMessage = state.newMassageText
            return{...state,
                newMassageText: '',
                messages: [...state.messages, {id: 7, message: newMessage}]
            }
        }
        default:
            return state
    }
}


export const onChangeNewMessageAC = (newTextMessage: string) => {
    return {
        type: ADD_NEW_MESSAGE,
        body: newTextMessage
    } as const
}

export const updateMessageAC = () => {
    return {
        type: UPDATE_MESSAGE,
    } as const
}


