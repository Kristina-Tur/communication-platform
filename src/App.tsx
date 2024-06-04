import * as React from 'react';
import './App.css';
import {
    Grid,
} from '@mui/material';
import bg from "./images/bg.png";
import Profile from "./Profile";
import {Header} from "./layout/Header/Header";
import {Sidebar} from "./layout/Sections/Sidebar/Sidebar";
import {Posts} from "./layout/Sections/Posts/Posts";
import {PostInput} from "./PostInput";

function App() {
    return (<>
            <Header/>
            <Sidebar/>
            <Grid container spacing={2} sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                justifyContent: 'center',
                backgroundColor: '#c8e0ff33',
                height: '100vh'
            }}>
                <Profile/>
                <Grid xs={6}>
                    <PostInput/>
                    <Posts/>
                </Grid>
            </Grid>
        </>
    );
}

export default App;

