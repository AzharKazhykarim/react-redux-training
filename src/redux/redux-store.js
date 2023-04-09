import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./reducer/dialogs-reducer";
import { profileReducer } from "./reducer/profile-reducer";
import { usersReducer } from "./reducer/users-reducer";
//state - логика
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
});
let store = createStore(reducers);
window.store = store;
export default store;