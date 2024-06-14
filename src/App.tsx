import * as React from 'react';
import {Header} from "./layout/header/Header";
import avatar from "./assets/images/avatar.png";
import {MessageType} from "./layout/sections/Dialogs/MessageList";
import {DialogListType} from "./layout/sections/Dialogs/DialogList";
import {Navigation} from "./layout/sections/Navigation/Navigation";
import {Profile} from "./layout/sections/Profile/Profile";
import {Route} from "react-router-dom";
import styled from "styled-components";
import {Dialogs} from "./layout/sections/Dialogs/Dialogs";
import {useState} from "react";
import {v1} from "uuid";

export type PostsType = {
    id: string
    postText: string
}

type AppPropsType = {
    initialPosts: PostsType[]
}

function App({initialPosts}: AppPropsType) {
    const [posts, setPosts] = useState<PostsType[]>(initialPosts)

    const addPost = (value: string) => {
        const newPost = {id: v1(), postText: value}
        setPosts([newPost, ...posts])
    }

    return (
        <div>
            <Header/>
            <ContentWrapper>
                <Navigation/>
                <Route path={'/profile'} render={() => <Profile
                    posts={posts}
                    addPost={addPost}
                />}/>
                {/*<Route path={'/dialogs'} render={() => <Dialogs
                    dialogs={dialogs}
                    message={message}
                    friendMessage={friendMessage}
                />}
                />*/}
            </ContentWrapper>
        </div>
    );
}

export default App;

const ContentWrapper = styled.div`
    display: flex;
`