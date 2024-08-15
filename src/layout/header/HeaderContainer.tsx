import * as React from 'react';
import {Header} from "./Header";
import {RootState} from "../../redux/store-redux";
import {connect} from "react-redux";
import {setIsAuthTC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.setIsAuth()
    }
    render(header: JSX.Element = <Header isAuth={this.props.isAuth} login={this.props.login}/>) {
        return header
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    setIsAuth: setIsAuthTC
})(HeaderContainer)