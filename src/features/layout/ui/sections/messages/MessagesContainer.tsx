import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {Messages} from "./Messages";
import {RootState} from "../../../../../app/store-redux";
import {withAuthRedirect} from "../../../../../common/hok/withAuthRedirect";

const mapStateToProps = (state: RootState) => {

    return {
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
    }
}
const authRedirectComponent = withAuthRedirect(Messages)
export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)