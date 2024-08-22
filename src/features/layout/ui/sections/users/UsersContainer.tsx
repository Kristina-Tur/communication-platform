import {connect} from "react-redux";
import {RootState} from "../../../../../app/store-redux";
import {followTC, getUsersTC, setCurrentPageAC, UnFollowTC, UserType} from "../../../model/users-reducer";
import React, {Component} from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../../../../../common/hok/withAuthRedirect";
import {Messages} from "../messages/Messages";
import {Redirect} from "react-router-dom";


type Props = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    isLoginIn: boolean
}


export class UsersAPIComponent extends Component<Props, any> {
    componentDidMount() {
        if (!this.props.isLoginIn) {
            return
        }
        this.fetchUsers(this.props.currentPage);
    }

    componentDidUpdate(prevProps: Props) {
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
        if (!this.props.isLoginIn) {
            return <Redirect to={"/login"} />;
        }
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
        followingInProgress: state.usersPage.followingInProgress,
        isLoginIn: state.auth.isLoginIn
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersTC,
    follow: followTC,
    unFollow: UnFollowTC,
})(authRedirectComponent)