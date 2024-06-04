import * as React from 'react';
import './App.css';
import {
    Grid,
} from '@mui/material';
import bg from "./images/bg.png";
import Profile from "./layout/Sections/Profile/Profile";
import {Header} from "./layout/Header/Header";
import {Posts} from "./layout/Sections/Posts/Posts";
import {PostInput} from "./layout/Sections/Posts/PostInput";
import {Navbar} from "./layout/Sections/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./layout/Sections/Dialogs/Dialogs";

function App() {
    return (
        <BrowserRouter>
            <Grid>
                <Header/>
                <Navbar/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
            </Grid>
        </BrowserRouter>
    );
}

export default App;

