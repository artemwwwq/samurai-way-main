import React from 'react'
import {StoreType} from "./Redux/store";

export const StoreContext = React.createContext({} as StoreType)

export type StoreContextType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: StoreContextType) => {
    return (
        <StoreContext.Provider value={props.store} >
            {props.children}
        </StoreContext.Provider>
    )
}

