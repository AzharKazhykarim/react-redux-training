import { dialogsReducer } from "./reducer/dialogs-reducer";
import { profileReducer } from "./reducer/profile-reducer";
let store = {
  _state: {
    postsData: [{ id: 1, message: 'Hi, how are you?', likesCount: 3 }, { id: 2, message: "It's my first post", likesCount: 8 }],
    dialogs: [{ id: 1, name: 'Azhar' }, { id: 2, name: 'Roo' },],
    messages: [{ id: 1, message: "YO" }, { id: 2, message: "go" }],
    newMessageBody: '',
    newPostText: '',
  },
  getState() {
    return this._state;
  }
  ,
  _callSubscriber() {
    console.log(5)
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state = profileReducer(this._state,action);
    this._state = dialogsReducer(this._state, action);
    this._callSubscriber(this._state);
  }
}






export default store;