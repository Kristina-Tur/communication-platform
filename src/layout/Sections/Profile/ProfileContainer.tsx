import {RootState} from "../../../redux/store-redux";
import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {Profile} from "./Profile";

const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {

    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)