import * as React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import avatar from "./assets/images/avatar.png";
import {MessageType} from "./layout/sections/Dialogs/MessageList";
import {DialogListType} from "./layout/sections/Dialogs/DialogList";
import {Navigation} from "./layout/sections/Navigation/Navigation";
import {Profile} from "./layout/sections/Profile/Profile";
import {GlobalStyles} from "./styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import styled from "styled-components";


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

    return (
        <BrowserRouter>
            <Header/>
            <ContentWrapper>
                <Navigation/>
                <Profile/>
            </ContentWrapper>
            {/*<Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogs={dialogs}
                    message={message}
                    friendMessage={friendMessage}
                />}
                />*/}
        </BrowserRouter>
    );
}

export default App;

const ContentWrapper = styled.div`
    display: flex;
`