import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessages from "./DialogMessage/DialogMessages";
import {MessagePageType} from "../../Redux/store";


type AppPropsType = {
    dialogPage: MessagePageType
    onChangeDialogMessage: (dialogMessage: string) => void
    onClickSendMessageHandler: ()=> void
}


function Dialogs(props: AppPropsType) {




    const dialogsMapEl = props.dialogPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesMapEl = props.dialogPage.messages.map(m => <DialogMessages key={m.id} message={m.message}/>)

    const onChangeDialogMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.onChangeDialogMessage(e.currentTarget.value)
    }

    const onClickSendMessageHandler = () => {
            props.onClickSendMessageHandler()
        }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsMapEl}
            </div>
            <div className={s.messages}>
                {messagesMapEl}
                <textarea
                          value={props.dialogPage.newMassageText}
                          onChange={onChangeDialogMessage}
                ></textarea>
                <button onClick={onClickSendMessageHandler}>send message</button>
            </div>

        </div>
    )
}

export default Dialogs;