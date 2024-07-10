import * as React from 'react';
import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sections/Sidebar/Sidebar";
import {Profile} from "./layout/sections/Profile/Profile";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import styled from "styled-components";
import {Messages} from "./layout/sections/Messages/Messages";
import {AppRootStateType} from "./redux/store-redux";
import {useSelector} from "react-redux";

export type PostsType = {
    id: string
    postText: string
}

/*type AppPropsType = {
    store: any
}*/

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
                        <Profile
                           /* store={store}*/
                        />}/>
                    <Route path={'/messages'} render={() =>
                        <Messages
                          /* store={store}*/
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