import s from "../Dialogs.module.css";
import React from "react";
type messagePropsType ={
    message: string
}
const DialogMessages = (props: messagePropsType) => {
    return (
    <div className={s.message}>{props.message}

    </div>
    )
}



export default DialogMessages;