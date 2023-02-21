import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessages from "./DialogMessage/DialogMessages";
import {onChangeNewMessageAC, updateMessageAC} from "../../Redux/dialogs-reducer";
import {ActionTypes, MessagePageType} from "../../Redux/store";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../Redux/redux-store";


type DialogsPropsType = {
    store: ReduxStoreType
}


function DialogsContainer(props: DialogsPropsType) {

    let state = props.store.getState()

    const onChangeDialogMessage = (dialogMessage: string) => {
            props.store.dispatch(onChangeNewMessageAC(dialogMessage))
    }

    const onClickSendMessageHandler = () => {
            props.store.dispatch(updateMessageAC())
        }


    return (


        <Dialogs onChangeDialogMessage={onChangeDialogMessage} onClickSendMessageHandler={onClickSendMessageHandler} dialogPage={state.dialogPage}/>)
}

export default DialogsContainer;