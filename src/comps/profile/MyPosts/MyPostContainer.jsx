import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducer/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         },
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextActionCreator(text));
//         }
//     }
// }

const MyPostContainer = connect(mapStateToProps,
{
    addPost: addPostActionCreator,
    updateNewPostText: updateNewPostTextActionCreator,
})(MyPosts);

export default MyPostContainer;



// export default function MyPostContainer(props) {
//     return (
//         <div>
//             <StoreContext.Consumer>
//                 {(store) => {
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }

//                     const updateNewPostText = (text) => {
//                         store.dispatch(updateNewPostTextActionCreator(text));
//                     }
//                     return (<MyPosts
//                         addPost={addPost}
//                         updateNewPostText={updateNewPostText}
//                         newPostText={store.getState().profileReducer.newPostText}
//                         posts={store.getState().profileReducer.posts} />)
//                 }
//                 }
//             </StoreContext.Consumer>

//         </div>
//     )
// }

