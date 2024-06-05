import * as React from 'react';
import './App.css';
import Profile from "./layout/Sections/Profile/Profile";
import {Header} from "./layout/Header/Header";
import {Navbar} from "./layout/Sections/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs, DialogsProps} from "./layout/Sections/Dialogs/Dialogs";
import avatar from "./images/avatar.png";
import {MessageType} from "./layout/Sections/Dialogs/MessageList";
import {DialogListType} from "./layout/Sections/Dialogs/DialogList";



function App() {
    const dialogs: DialogListType[] = [
        { id: 1, name: 'Max', avatar: 'https://via.placeholder.com/150/92c952' },
        { id: 2, name: 'John', avatar: 'https://via.placeholder.com/150/771796' },
        { id: 3, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355' },
        { id: 4, name: 'Jane', avatar: 'https://via.placeholder.com/150/771796' },
        { id: 5, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355' },
        { id: 6, name: 'Alex', avatar: 'https://via.placeholder.com/150/92c952'  },
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
                <Navbar/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogs={dialogs}
                    message={message}
                    friendMessage={friendMessage}
                />}
                />
        </BrowserRouter>
    );
}

export default App;

