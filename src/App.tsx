import * as React from 'react';
import {Header} from "./layout/header/Header";
import avatar from "./assets/images/avatar.png";
import {MessageType} from "./layout/sections/Dialogs/MessageList";
import {DialogListType} from "./layout/sections/Dialogs/DialogList";
import {Navigation} from "./layout/sections/Navigation/Navigation";
import {Profile} from "./layout/sections/Profile/Profile";
import { Route} from "react-router-dom";
import styled from "styled-components";
import {Dialogs} from "./layout/sections/Dialogs/Dialogs";
import {useState} from "react";
import {v1} from "uuid";

export type PostsType = {
    id: string
    postText: string
}

function App() {
    const dialogs: DialogListType[] = [
        {id: 1, name: 'Max', avatar: 'https://via.placeholder.com/150/92c952'},
        {id: 2, name: 'John', avatar: 'https://via.placeholder.com/150/771796'},
        {id: 3, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355'},
        {id: 4, name: 'Jane', avatar: 'https://via.placeholder.com/150/771796'},
        {id: 5, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355'},
        {id: 6, name: 'Alex', avatar: 'https://via.placeholder.com/150/92c952'},
    ];
    const message: MessageType = {
        id: 0,
        user: {
            avatar: avatar, // можно менять
            name: 'Some Name',  // можно менять
        },
        message: {
            text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
            time: '22:00', // можно менять
        },
    }
    const friendMessage: MessageType = {
        id: 100,
        user: {
            avatar: avatar, // можно менять
            name: 'Friend Name', // можно менять
        },
        message: {
            text: 'зеркальное сообщение для тренировки css', // можно менять
            time: '22:00', // можно менять
        },
    }

    const [posts, setPosts] = useState<PostsType[]>([
        {id: v1(), postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {
            id: v1(),
            postText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laciniaodio vitae vestibulum vestibulum.'
        },
    ])

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
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogs={dialogs}
                    message={message}
                    friendMessage={friendMessage}
                />}
                />
            </ContentWrapper>

        </div>
    );
}

export default App;

const ContentWrapper = styled.div`
    display: flex;
`