let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {

  posts: [{ id: 1, message: 'Hi, how are you?', likesCount: 3 }, { id: 2, message: "It's my first post", likesCount: 8 }],
  newPostText: '',
}


export const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {

      return {
        ...state,
        posts: [...state.posts, { id: 3, message: state.newPostText, likesCount: 8 }],
        newPostText: '',
      };
    }

    case UPDATE_NEW_POST_TEXT: {

      return {
        ...state,
        newPostText: action.updatePost,
      }

    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, updatePost: text
  }
}