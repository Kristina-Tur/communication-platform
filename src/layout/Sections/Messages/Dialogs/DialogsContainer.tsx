import {RootState} from "../../../../redux/store-redux";
import {AnyAction, Dispatch} from "redux";
import {addPostAC, updatePostTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostInputField} from "../../Profile/PostInputField/PostInputField";
import {Dialogs} from "./Dialogs";

const mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.messagesPage.dialogs
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)