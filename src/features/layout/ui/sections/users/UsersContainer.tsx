import {connect} from "react-redux";
import {RootState} from "../../../../../app/store-redux";
import {followTC, getUsersTC, setCurrentPageAC, UnFollowTC, UserType} from "../../../model/users-reducer";
import React, {Component} from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../../../../../common/hok/withAuthRedirect";
import {Messages} from "../messages/Messages";
import {Redirect} from "react-router-dom";
import {
    getCurrentPage,
    getFollowingInProgress, getIsLoginIn,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../model/users-selectors";


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
    console.log('mapStateToProps')
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount:  getTotalUsersCount(state),
        currentPage:  getCurrentPage(state),
        followingInProgress:  getFollowingInProgress(state),
        isLoginIn:  getIsLoginIn(state)
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersTC,
    follow: followTC,
    unFollow: UnFollowTC,
})(authRedirectComponent)