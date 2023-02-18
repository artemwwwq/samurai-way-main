import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessages from "./DialogMessage/DialogMessages";
import {

    MessagePageType, updateNewPostActionCreator,

} from "../../Redux/state";


type AppPropsType = {
    messagePage: MessagePageType
}


function Dialogs(props: AppPropsType) {


    const dialogsMapEl = props.messagePage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesMapEl = props.messagePage.messages.map(m => <DialogMessages key={m.id} message={m.message}/>)
    let addMassegeEl = useRef<HTMLTextAreaElement>(null)

    const onChangeDialogMessage = () => {
        if(addMassegeEl.current !== null) {
            let newText = addMassegeEl.current.value

        }
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsMapEl}
            </div>
            <div className={s.messages}>
                {messagesMapEl}
                <textarea ref={addMassegeEl}
                          value={props.messagePage.newMassageText}
                          onChange={onChangeDialogMessage}
                ></textarea>
                <button>send message</button>
            </div>

        </div>
    )
}

export default Dialogs;