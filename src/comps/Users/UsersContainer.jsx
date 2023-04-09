import { connect } from "react-redux";
import {followAC, unfollowAC, setUsersAC, setCurrentPage} from "../../redux/reducer/users-reducer";
import User from "./User";



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalCount:state.usersPage.totalCountUsers,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage:(currentPage)=>{
//             dispatch(setCurrentPage(currentPage));
//         }
//
//     }
// }

const UsersContainer = connect(mapStateToProps,
    {
        follow:followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        setCurrentPage:setCurrentPage,
    })(User);

export default UsersContainer;