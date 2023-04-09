import React from 'react'
import n from "./Navbar.module.css"
import {NavLink} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className={n.nav}>
        <div className={n.item}><NavLink to="/profile" activeClassName={n.active}>Profile</NavLink></div>
        <div className={n.item}> <NavLink to="/dialogs" activeClassName={n.active}>Messages</NavLink></div>
        <div className={n.item}> <NavLink to="/users" activeClassName={n.active}>User</NavLink></div>
        <div className={n.item}> <a>News</a> </div>
        <div className={n.item}><a>Music</a></div>
        <div className={n.item}><a>Settings</a></div>
      </nav>
    )
}
