import * as React from 'react';
import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sections/Sidebar/Sidebar";
import {Profile} from "./layout/sections/Profile/Profile";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import styled from "styled-components";
import {Messages} from "./layout/sections/Messages/Messages";
import {useState} from "react";
import {v1} from "uuid";
import {ActionType, StateType, StoreType} from "./redux/store";

export type PostsType = {
    id: string
    postText: string
}

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App({state, dispatch}: AppPropsType) {

    return (
        <div>
            <Header/>
            <ContentWrapper>
                <Sidebar sidebar={state.sidebar.menu}/>
                <Switch>
                    <Route exact path="/samurai-way-main" render={() => <Redirect to='/profile'/>}/>{/*В этом примере мы используем
                    компонент Redirect для перенаправления пользователя на страницу /profile при совпадении пути /. Мы
                    также используем свойство exact, чтобы убедиться, что маршрут / совпадает только с точным путем /.*/}
                    <Route path={'/profile'} render={() =>
                        <Profile
                            posts={state.profilePage.posts}
                            postText={state.profilePage.postText}
                            dispatch={dispatch}
                        />}/>
                    <Route path={'/messages'} render={() =>
                        <Messages
                            dialogs={state.messagesPage.dialogs}
                            messages={state.messagesPage.messages}
                            /*friendMessage={redux.messagesPage}*/
                            messageText={state.messagesPage.messageText}
                            dispatch={dispatch}
                        />}
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