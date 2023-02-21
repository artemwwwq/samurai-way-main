import {ActionTypes, MessagePageType} from "./store";

export const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
export const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

const initialState = {

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
}

export const dialogsReducer = (state= initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            state.newMassageText = action.body
            return state
        case UPDATE_MESSAGE:
            let newMessage = state.newMassageText
            state.newMassageText = ''
            state.messages.push({id: 7, message: newMessage})
            return state
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


