import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {UsersFunc} from "./UsersFunc";
import {RootState} from "../../../redux/store-redux";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersPageType,
    UserType
} from "../../../redux/users-reducer";
import axios from "axios";
import React, {Component} from "react";
import {Users} from "./Users";
import {setAppLoaderAC} from "../../../redux/app-reducer";


type UsersProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number, isFollow: boolean) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setAppLoading: (isLoading: boolean) => void
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0d6fcc4b-d0b8-4c34-b068-91acef8dc727'
    }
});

export class UsersAPIComponent extends Component<UsersProps, any> {
    componentDidMount() {
        this.props.setAppLoading(true)
        this.fetchUsers(this.props.currentPage);

    }

    componentDidUpdate(prevProps: UsersProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.fetchUsers(this.props.currentPage);
        }
    }

    fetchUsers = (currentPage: number) => {

        instance.get(`users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setAppLoading(false)
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);

            })
            .catch(rej => console.log(rej));
    }

    handleFollowUser = (userId: number, isFollow: boolean) => {
        this.props.followUser(userId, isFollow);
    }

    handlePageChange = (page: number) => {
        this.props.setCurrentPage(page);
    }

    render() {
        return (
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   handleFollowUser={this.handleFollowUser}
                   handlePageChange={this.handlePageChange}
            />
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.app.isLoading
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
        setAppLoading: (isLoading: boolean) => {
            dispatch(setAppLoaderAC(isLoading))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)