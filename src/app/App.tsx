import * as React from 'react';
import {Sidebar} from "../features/layout/ui/sections/sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import {Messages} from "../features/layout/ui/sections/messages/Messages";
import {UsersContainer} from "../features/layout/ui/sections/users/UsersContainer";
import ProfileContainer from "../features/layout/ui/sections/profile/ProfileContainer";
import HeaderContainer from "../features/layout/ui/header/HeaderContainer";
import {Login} from "../features/auth/ui/Login";
import {MessagesContainer} from "../features/layout/ui/sections/messages/MessagesContainer";

/**/
function App() {

    return (
        <div>
            <HeaderContainer/>
            <ContentWrapper>
                <Sidebar/>
                <Switch>
                    {/*<Route exact path="/samurai-way-main" render={() => <Redirect to='/profile'/>}/>В этом примере мы используем
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
        </div>
    );
}

export default App;

const ContentWrapper = styled.div`
    display: flex;
`