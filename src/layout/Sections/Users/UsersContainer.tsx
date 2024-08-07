import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootState} from "../../../redux/store-redux";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersPageType,
    UserType
} from "../../../redux/users-reducer";
import {UsersC} from "./UsersС";


const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followUser: (userId: number, isFollow: boolean) => {
            dispatch(followUserAC(userId, isFollow))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)