import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {ThemeProvider} from "styled-components";
import {Theme} from "./app/styles/Theme";
import {GlobalStyles} from "./app/styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import {store} from './app/store-redux'
import {Provider} from "react-redux";

/*let rerenderEntireTree = () => {*/
    ReactDOM.render(
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
                <GlobalStyles/>
            </BrowserRouter>
        </ThemeProvider>,
        document.getElementById('root')
    );
/*}*/

/*
rerenderEntireTree(redux)
subscribe(rerenderEntireTree)*/
/*

store.subscribe(rerenderEntireTree)
rerenderEntireTree()*/
