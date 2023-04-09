import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps=(state)=>{
  return {
    dialogsPage: state.dialogsPage,
  }
}
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     sendMessage:()=>{
//       dispatch(sendMessageActionCreator());
//       },
//     updateNewMessageText:(text)=>{
//       dispatch(updateNewMessageTextActionCreator(text));
//     }
//   }
// }

 const DialogsContainer = connect(mapStateToProps,{
   sendMessage:sendMessageActionCreator,
   updateNewMessageText:updateNewMessageTextActionCreator,

 })(Dialogs);
 export default DialogsContainer;
