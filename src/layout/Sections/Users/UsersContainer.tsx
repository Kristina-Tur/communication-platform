import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootState} from "../../../redux/store-redux";
import {followUserAC, setUsersAC, UsersPageType, UserType} from "../../../redux/users-reducer";


const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.items,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        followUser: (userId: number, isFollow: boolean) => {
            dispatch(followUserAC(userId, isFollow))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)