import React from "react";
import {initialStateType, onChangeNewMessageAC, updateMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {RootReducerType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



export type MapStateToProps = {
    dialogPage: initialStateType
}

export type MapDispatchToProps = {
    onChangeDialogMessage: (dialogMessage: string)=> void
    onClickSendMessageHandler: ()=> void
}


export type MapDialogPropsType = MapStateToProps & MapDispatchToProps


let mapStateToProps = (state: RootReducerType): MapStateToProps => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onChangeDialogMessage: (dialogMessage: string)=> {
            dispatch(onChangeNewMessageAC(dialogMessage))
        },
        onClickSendMessageHandler: ()=> {
            dispatch(updateMessageAC())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

