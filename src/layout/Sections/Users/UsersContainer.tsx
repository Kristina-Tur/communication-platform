import {connect} from "react-redux";
import {RootState} from "../../../redux/store-redux";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowUserAC,
    UserType
} from "../../../redux/users-reducer";
import React, {Component} from "react";
import {Users} from "./Users";
import {setAppLoaderAC} from "../../../redux/app-reducer";
import {UsersApi} from "../../../api/API";


type UsersProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setAppLoading: (isLoading: boolean) => void
}


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
        UsersApi.fetchUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.setAppLoading(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);

            })
            .catch(e => console.log(e));
    }

    followUser = (userId: number) => {
        this.props.followUser(userId);
    }
    unFollowUser = (userId: number) => {
        this.props.unFollowUser(userId);
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
                   followUser={this.followUser}
                   unFollowUser={this.unFollowUser}
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

export const UsersContainer = connect(mapStateToProps, {
    followUser: followUserAC,
    unFollowUser: unFollowUserAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setAppLoading: setAppLoaderAC
})(UsersAPIComponent)