let SET_USERS = 'SEt-USERS';
let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let initialState = {
    users: [],
    pageSize:5,
    totalCountUsers: 5,
    currentPage:1,
    isFetching:false,
}


export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: {

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        }

        case UNFOLLOW: {

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        }

        case SET_USERS:{
            return{
                ...state,
                users:action.users,
            }
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state,
                currentPage: action.currentPage
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,

    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage:currentPage,

    }
}