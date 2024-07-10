
import {addPostAC, updatePostTextAC} from "../../../../redux/profile-reducer";
import {PostInputField} from "./PostInputField";
import {AppRootStateType, RootState} from "../../../../redux/store-redux";
import {connect, useDispatch, useSelector} from "react-redux";
import {AnyAction, Dispatch} from "redux";

/*type PostInputContainerPropsType = {
    store: AppRootStateType
}*/

/*export const PostInputFieldContainer = ({store}: PostInputContainerPropsType) => {
    const dispatch = useDispatch();

    const updatePostText = (value: string) => {
            dispatch(updatePostTextAC(value))
    }

    const addPost = () => {
            dispatch(addPostAC())
    }

    return <PostInputField
        updatePostText={updatePostText}
        addPost={addPost}
        postText={store.profilePage.postText}/>;
};*/

const mapStateToProps = (state: RootState) => {
    return {
        postText: state.profilePage.postText
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updatePostText: (value: string) => {
            dispatch(updatePostTextAC(value))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const PostInputFieldContainer = connect(mapStateToProps, mapDispatchToProps)(PostInputField)