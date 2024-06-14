import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {PostsType} from './App';
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import {GlobalStyles} from "./styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import {DialogListType} from "./layout/sections/Dialogs/DialogList";
import {MessageType} from "./layout/sections/Dialogs/MessageList";
import avatar from "./assets/images/avatar.png";
import {v1} from "uuid";
import {state} from './state/state'

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <App initialPosts={state.profile.posts}/>
            <GlobalStyles/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);