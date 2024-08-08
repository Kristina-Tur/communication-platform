import * as React from 'react';
import {Header} from "./Header";
import {instance} from "../../api/API";
import {RootState} from "../../redux/store-redux";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {setAuthUserData, setIsAuth} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        instance.get(`auth/me`)
            .then(res => {
                console.log('auth Response:', res.data);
                if (res.data.resultCode === 0) {
                    this.props.setIsAuth(true)
                    this.props.setAuthUserData(res.data.data);
                }
            })
            .catch(rej => console.log(rej));
    }
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const mapDispatchToProps = () => {
    return {

    }
}


export default connect(mapStateToProps, {
    setAuthUserData,
    setIsAuth
})(HeaderContainer)