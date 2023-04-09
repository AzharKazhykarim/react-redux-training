import React from 'react'
import d from "../Dialogs.module.css"

export default function Message(props) {
    return (
        <div>
            <div className={d.messages}>{props.message}</div>
        </div>
    )
}
