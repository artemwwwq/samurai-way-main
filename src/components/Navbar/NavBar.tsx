import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

function NavBar() {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.active} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.active} >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;