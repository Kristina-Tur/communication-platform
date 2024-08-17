import {connect} from "react-redux";
import {RootState} from "../../../../../app/store-redux";
import {followTC, getUsersTC, setCurrentPageAC, UnFollowTC, UserType} from "../../../model/users-reducer";
import React, {Component} from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../../../../../common/hok/withAuthRedirect";
import {Messages} from "../messages/Messages";


type UsersProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}


export class UsersAPIComponent extends Component<UsersProps, any> {
    componentDidMount() {
        this.fetchUsers(this.props.currentPage);
    }

    componentDidUpdate(prevProps: UsersProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.fetchUsers(this.props.currentPage);
        }
    }

    fetchUsers = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
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
                   handlePageChange={this.handlePageChange}
                   followingInProgress={this.props.followingInProgress}
                   follow = {this.props.follow}
                   unFollow = {this.props.unFollow}
            />
        );
    }
}
const authRedirectComponent = withAuthRedirect(UsersAPIComponent)
const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersTC,
    follow: followTC,
    unFollow: UnFollowTC,
})(authRedirectComponent)