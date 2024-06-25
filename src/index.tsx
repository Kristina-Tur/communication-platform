import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {PostsType} from './App';
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import {GlobalStyles} from "./styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from './state/state'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <App
                    state={store.getState()}
                    dispatch = {store.dispatch.bind(store)}
                />
                <GlobalStyles/>
            </BrowserRouter>
        </ThemeProvider>,
        document.getElementById('root')
    );
}

/*
rerenderEntireTree(state)
subscribe(rerenderEntireTree)*/

store.subscribe(rerenderEntireTree)
rerenderEntireTree()