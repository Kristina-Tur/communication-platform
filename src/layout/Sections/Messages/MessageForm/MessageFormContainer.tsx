import {sendMessageAC, updateMessageTextAC} from "../../../../redux/messages-reducer";
import { MessageForm } from './MessageForm';
import {connect, useDispatch} from "react-redux";
import {AppRootStateType, RootState} from "../../../../redux/store-redux";
import {AnyAction, Dispatch} from "redux";

type MessageFormType = {
    store: AppRootStateType
}

/*export const MessageFormContainer = ({store}: MessageFormType) => {
    const dispatch = useDispatch();
    const updateMessageText = (value: string) => {
            dispatch(updateMessageTextAC(value))
    }

    const sendMessage = () => {
        dispatch(sendMessageAC())
    }

    return <MessageForm
        updateMessageText={updateMessageText}
        sendMessage={sendMessage}
        messageText={store.messagesPage.messageText}
    />
}*/

const mapStateToProps = (state: RootState) => {
    return {
        messageText: state.messagesPage.messageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateMessageText: (value: string) => {
            dispatch(updateMessageTextAC(value))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const MessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageForm)