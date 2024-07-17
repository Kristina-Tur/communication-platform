import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootState} from "../../../redux/store-redux";
import {followUserAC, setUsersAC} from "../../../redux/users-reducer";


const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        followUser: (userId: string, isFollow: boolean) => {
            dispatch(followUserAC(userId, isFollow))
        },
        setUsers: () => {
            /*dispatch(setUsersAC(users))*/
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)