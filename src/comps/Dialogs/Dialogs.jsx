import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import d from "./Dialogs.module.css"
import Message from './Message/Message'

export default function Dialogs(props) {

  const handleClick = () => {
    props.sendMessage();
  }

  const handleText = (e) => {
    props.updateNewMessageText(e.target.value);
  }

  return (
    <div className={d.dialogs}>
      <div className={d.dialog_items}>
        {props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)}
      </div>
      <div className={d.messages}>
        {props.dialogsPage.messages.map(msg => <Message key={msg.id} message={msg.message} />)}
      </div>
      <textarea onChange={handleText} value={props.dialogsPage.newMessageBody}></textarea>
      <button onClick={handleClick}>Reply</button>
    </div>
  )

}
