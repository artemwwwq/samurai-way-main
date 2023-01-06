import React, {useRef} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessages from "./DialogMessage/DialogMessages";
import {DialogsType, MessagesType} from "../../App";

type AppPropsType ={
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}


function Dialogs(props: AppPropsType) {




    const dialogsMapEl = props.dialogs.map( d=> <DialogItem name={d.name} id={d.id}/> )
    const messagesMapEl = props.messages.map( m=> <DialogMessages message={m.message}/> )
    let addMassegeEl = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        if(addMassegeEl.current !== null) {
            alert(addMassegeEl.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsMapEl}
            </div>
            <div className={s.messages}>
                {messagesMapEl}
                <textarea ref={addMassegeEl}></textarea>
                <button onClick={addMessage}>send message</button>
            </div>

        </div>
    )
}

export default Dialogs;