import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessages from "./DialogMessage/DialogMessages";
import {
    ActionTypes,

    MessagePageType, onChangeNewMessageAC, updateMessageAC, updateNewPostActionCreator,

} from "../../Redux/state";


type AppPropsType = {
    messagePage: MessagePageType
    dispatch: (action: ActionTypes)=> void
}


function Dialogs(props: AppPropsType) {


    const dialogsMapEl = props.messagePage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesMapEl = props.messagePage.messages.map(m => <DialogMessages key={m.id} message={m.message}/>)

    const onChangeDialogMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(onChangeNewMessageAC(e.currentTarget.value))
    }

    const onClickSendMessageHandler = () => {
            props.dispatch(updateMessageAC())
        }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsMapEl}
            </div>
            <div className={s.messages}>
                {messagesMapEl}
                <textarea
                          value={props.messagePage.newMassageText}
                          onChange={onChangeDialogMessage}
                ></textarea>
                <button onClick={onClickSendMessageHandler}>send message</button>
            </div>

        </div>
    )
}

export default Dialogs;