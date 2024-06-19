import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {PostsType} from './App';
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import {GlobalStyles} from "./styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import {addPost, state, StateType, subscribe, updatePostText} from './state/state'

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updatePostText={updatePostText}
                />
                <GlobalStyles/>
            </BrowserRouter>
        </ThemeProvider>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)