import {RootState} from "../../../../../../app/store-redux";
import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
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