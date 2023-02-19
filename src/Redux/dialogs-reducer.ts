import {ActionTypes, MessagePageType} from "./state";

export const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
export const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

export const dialogsReducer = (state: MessagePageType, action: ActionTypes) => {

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


