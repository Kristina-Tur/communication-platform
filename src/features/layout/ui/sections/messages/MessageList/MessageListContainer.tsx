import {RootState} from "../../../../../../app/store-redux";
import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {MessageList} from "./MessageList";


const mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        friendMessages: state.messagesPage.friendMessages,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
    }
}

export const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList)