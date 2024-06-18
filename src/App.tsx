import * as React from 'react';
import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sections/Sidebar/Sidebar";
import {Profile} from "./layout/sections/Profile/Profile";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import styled from "styled-components";
import {Messages} from "./layout/sections/Messages/Messages";
import {useState} from "react";
import {v1} from "uuid";
import {DialogsType, MenuType, MessageType} from "./state/state";

export type PostsType = {
    id: string
    postText: string
}

type AppPropsType = {
    sidebar: MenuType[]
    initialPosts: PostsType[]
    messagesPage: {
        dialogs: DialogsType[]
        message: MessageType
        friendMessage: MessageType
    }
}

function App({initialPosts, messagesPage, sidebar}: AppPropsType) {
    const [posts, setPosts] = useState<PostsType[]>(initialPosts)

    const addPost = (value: string) => {
        const newPost = {id: v1(), postText: value}
        setPosts([newPost, ...posts])
    }

    return (
        <div>
            <Header/>
            <ContentWrapper>
                <Sidebar sidebar={sidebar}/>
                <Switch>
                    <Route exact path="/samurai-way-main" render={() => <Redirect to='/profile'/>}/>{/*В этом примере мы используем
                    компонент Redirect для перенаправления пользователя на страницу /profile при совпадении пути /. Мы
                    также используем свойство exact, чтобы убедиться, что маршрут / совпадает только с точным путем /.*/}
                    <Route path={'/profile'} render={() => <Profile
                        posts={posts}
                        addPost={addPost}
                    />}/>
                    <Route path={'/messages'} render={() => <Messages
                    dialogs={messagesPage.dialogs}
                    message={messagesPage.message}
                    friendMessage={messagesPage.friendMessage}
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