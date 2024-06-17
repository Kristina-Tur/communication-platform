import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {PostsType} from './App';
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import {GlobalStyles} from "./styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import {state} from './state/state'

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <App
                initialPosts={state.profilePage.posts}
                messagesPage={state.messagesPage}
                sidebar={state.sidebar.menu}
            />
            <GlobalStyles/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);