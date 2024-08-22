import * as React from 'react';
import {Sidebar} from "../features/layout/ui/sections/sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import {Messages} from "../features/layout/ui/sections/messages/Messages";
import {UsersContainer} from "../features/layout/ui/sections/users/UsersContainer";
import {Login} from "../features/auth/ui/Login";
import {MessagesContainer} from "../features/layout/ui/sections/messages/MessagesContainer";
import {ProfileContainer} from "../features/layout/ui/sections/profile/ProfileContainer";
import {useEffect} from "react";
import {setIsAuthTC} from "../features/auth/model/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "../features/layout/ui/header/Header";
import {AppRootStateType} from "./store-redux";
import {Loader} from "../common/components/loader/Loader";
import {ErrorSnackbar} from "../common/components/errorSnackbar/ErrorSnackbar";

/**/
function App() {
    const dispatch = useDispatch()
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    useEffect(() => {
        if (!isLoginIn) {
            dispatch(setIsAuthTC())
        }
    }, [dispatch, isLoginIn]);
    /*if (!isAuth) {
        return (
                <Loader/>
        )
    }*/
    return (
        <div>
            <Header/>
            <ContentWrapper>
                <Sidebar/>
                <Switch>
                    {/*<Route exact path="/samurai-way-main" render={() => <Redirect to='/profile/:userId'/>}/>В этом примере мы используем
                    компонент Redirect для перенаправления пользователя на страницу /profile при совпадении пути /. Мы
                    также используем свойство exact, чтобы убедиться, что маршрут / совпадает только с точным путем /.*/}
                    <Route path={'/profile/:userId?'} render={() =>
                        <ProfileContainer/>}/>
                    {/* <Route path="/profile" element={<ProfileContainer isMain={true}/>} />
                    <Route path="/profile/:userId" element={<ProfileContainer />} />*/}
                    <Route path={'/messages'} render={() =>
                        <MessagesContainer/>}
                    />
                    <Route path={'/users'} render={() =>
                        <UsersContainer/>}
                    />
                    <Route path={'/login'} render={() =>
                        <Login/>}
                    />

                </Switch>
            </ContentWrapper>
            <ErrorSnackbar />
        </div>
    );
}

export default App;

const ContentWrapper = styled.div`
    display: flex;
`