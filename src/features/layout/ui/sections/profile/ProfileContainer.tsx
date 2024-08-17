import {RootState} from "../../../../../app/store-redux";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import React from "react";
import {getUserProfileTC, PostsType, ProfileType} from "../../../model/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../../common/hok/withAuthRedirect";
import {Messages} from "../messages/Messages";

/*export function withRouter(Children: any){
    return(props: any)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}*/

type ProfileContainerProps = RouteComponentProps<{ userId: string }> & {
    posts: PostsType[];
    profile: ProfileType | null;
    isAuth: boolean
    getUserProfile: (userId: number) => void;
};

type ProfileContainerState = {
};

class ProfileContainer extends React.Component<ProfileContainerProps, ProfileContainerState>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = '31392'
        }
       this.props.getUserProfile(+userId)
    }
    render() {
        return <Profile profile={this.props.profile} posts={this.props.posts}/>
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = () => {
    return {

    }
}
let authRedirectComponent  = withAuthRedirect(ProfileContainer)

const withURLDataContainerComponent = withRouter(authRedirectComponent)

export default connect(mapStateToProps,
    {
        getUserProfile: getUserProfileTC
    })(withURLDataContainerComponent)
