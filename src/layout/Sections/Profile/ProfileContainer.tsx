import {RootState} from "../../../redux/store-redux";
import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import React from "react";
import {instance} from "../../../api/API";
import {PostsType, ProfileType, setUserProfileAC} from "../../../redux/profile-reducer";
import {useParams, withRouter} from "react-router-dom";

/*export function withRouter(Children: any){
    return(props: any)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}*/

type ProfileProps = {
    posts: PostsType[]
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = 31392
        }
        instance.get(`profile/` + userId)
            .then(res => {
                console.log('API Response:', res.data);
                this.props.setUserProfile(res.data);

            })
            .catch(rej => console.log(rej));
    }
    render() {
        console.log('Profile Props:', this.props);
        return <Profile {...this.props} profile={this.props.profile} posts={this.props.posts}/>
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = () => {
    return {

    }
}

const withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(withURLDataContainerComponent)
