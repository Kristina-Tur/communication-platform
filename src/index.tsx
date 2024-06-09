import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import {GlobalStyles} from "./styles/GlobalStyles";

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <App/>
        <GlobalStyles/>
    </ThemeProvider>,
  document.getElementById('root')
);