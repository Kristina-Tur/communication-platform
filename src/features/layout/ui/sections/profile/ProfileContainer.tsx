import {RootState} from "../../../../../app/store-redux";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import React from "react";
import {getStatusTC, getUserProfileTC, PostsType, ProfileType, updateStatusTC} from "../../../model/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../../common/hok/withAuthRedirect";
import {Messages} from "../messages/Messages";
import {followTC, getUsersTC, setCurrentPageAC, UnFollowTC} from "../../../model/users-reducer";
import {UsersAPIComponent} from "../users/UsersContainer";
import {log} from "node:util";

/*export function withRouter(Children: any){
    return(props: any)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}*/

type ProfileContainerProps = RouteComponentProps<{ userId: string }> & {
    posts: PostsType[];
    profile: ProfileType
    isAuth: boolean
    isLoginIn: boolean
    status: string
    getUserProfile: (userId: number) => void;
    getStatus: (userId: number) => void;
    updateStatus: (status: string) => void;
};

type ProfileContainerState = {
};

class ProfileAPIContainer extends React.Component<ProfileContainerProps, ProfileContainerState>{

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if(!userId){
            userId = 31392
        }
        if (!this.props.isLoginIn) {
            return
        }
       this.props.getUserProfile(userId)
       this.props.getStatus(userId)
    }
    render() {
        if (!this.props.isLoginIn) {
            return <Redirect to={"/login"} />;
        }
        return <Profile profile={this.props.profile}
                        posts={this.props.posts}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

let authRedirectComponent  = withAuthRedirect(ProfileAPIContainer)
const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        isLoginIn: state.auth.isLoginIn,
        status: state.profilePage.status
    }
}

const withURLDataContainerComponent = withRouter(authRedirectComponent)
export const ProfileContainer = connect(mapStateToProps,
    {
        getUserProfile: getUserProfileTC,
        getStatus: getStatusTC,
        updateStatus: updateStatusTC
    })(withURLDataContainerComponent)



