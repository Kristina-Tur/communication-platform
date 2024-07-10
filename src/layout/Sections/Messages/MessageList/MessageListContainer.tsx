import {RootState} from "../../../../redux/store-redux";
import {AnyAction, Dispatch} from "redux";
import {addPostAC, updatePostTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostInputField} from "../../Profile/PostInputField/PostInputField";
import {MessageList} from "./MessageList";


const mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
    }
}

export const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList)