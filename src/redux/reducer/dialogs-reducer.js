let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [{ id: 1, name: 'Azhar' }, { id: 2, name: 'Roo' },],
  messages: [{ id: 1, message: "YO" }, { id: 2, message: "go" }],
  newMessageBody: '',
}

export const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return  {
        ...state,
        newMessageBody: action.message,
      }

    case SEND_MESSAGE:
      let message = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 3, message: message }]
      };
      
    default:
      return state;
  }
}


export const sendMessageActionCreator = () => {return {type: SEND_MESSAGE}}

export const updateNewMessageTextActionCreator = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY, message: message
  }
}