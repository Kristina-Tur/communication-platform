import * as React from 'react';
import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sections/Sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import {Messages} from "./layout/sections/Messages/Messages";
import {ProfileContainer} from "./layout/sections/Profile/ProfileContainer";
import {UsersContainer} from "./layout/sections/Users/UsersContainer";
import {useState} from "react";

function App() {

    return (
        <div>
            <Header/>
            <ContentWrapper>
                <Sidebar/>
                <Switch>
                    <Route exact path="/samurai-way-main" render={() => <Redirect to='/profile'/>}/>{/*В этом примере мы используем
                    компонент Redirect для перенаправления пользователя на страницу /profile при совпадении пути /. Мы
                    также используем свойство exact, чтобы убедиться, что маршрут / совпадает только с точным путем /.*/}
                    <Route path={'/profile'} render={() =>
                        <ProfileContainer/>}/>
                    <Route path={'/messages'} render={() =>
                        <Messages/>}
                    />
                    <Route path={'/users'} render={() =>
                        <UsersContainer/>}
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