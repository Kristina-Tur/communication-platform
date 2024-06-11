import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import {GlobalStyles} from "./styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <App/>
            <GlobalStyles/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);