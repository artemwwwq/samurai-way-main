import React from "react";
import {dialogsReducer, onChangeNewMessageAC, updateMessageAC} from "./dialogs-reducer";

test('add new message for dialog', ()=> {

    const initialState = {

        messages: [
            {id: 1, message: 'Hi, my dear friend'},
            {id: 2, message: 'I switch you questions for special'},
            {id: 3, message: 'Hi, my dear friend'},
            {id: 4, message: 'Hi, my dear friend'},
            {id: 5, message: 'Hi, my dear friend'},
            {id: 6, message: 'I LOVE U'}
        ] ,
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

    const action = onChangeNewMessageAC('Hello world')

    const newState = dialogsReducer(initialState, action)


    expect(newState.newMassageText).toBe('Hello world')

})

test('update new massage for dialog', ()=> {



        const initialState = {

            messages: [
                {id: 1, message: 'Hi, my dear friend'},
                {id: 2, message: 'I switch you questions for special'},
                {id: 3, message: 'Hi, my dear friend'},
                {id: 4, message: 'Hi, my dear friend'},
                {id: 5, message: 'Hi, my dear friend'},
                {id: 6, message: 'I LOVE U'}
            ] ,
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

    const action = updateMessageAC()

    const newState = dialogsReducer(initialState, action)

    expect(newState.messages.length).toBe(7)
    expect(newState.messages[6].id).toBe(7)

})
