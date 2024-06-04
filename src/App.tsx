import * as React from 'react';
import './App.css';
import {Header} from "./layout/Header";
import { List, ListItem, AppBar, Toolbar, Typography, Drawer, ListItemText, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import logo from "./images/twitterLOGO.svg";
import bg from "./images/Screenshot024-06-02155948.png";
import {List1} from "./layout/list";

function App() {
    return (<>
            {/*<Header/>*/}
            {/*<TemporaryDrawer/>*/}
            <div>
                <AppBar position="static">
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        gap: '20px',
                        backgroundColor: '#fff',
                        color: '#000'
                    }}>
                        <List1/>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2} sx={{
                    maxHeight: '200px',
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <Grid item xs={3}>
                        <Drawer sx={{width: 250}} variant="permanent" anchor="left">
                            <a href={'#'}>
                                <Logo src={logo} alt={'logo'}/>
                            </a>
                            <List>
                                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                            </ListItemIcon>
                                            <ListItemText primary={text}/>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{marginTop: '150px'}}>
                            <CardContent>
                                <Typography variant="h5">Заголовок поста</Typography>
                                <Typography variant="body2">Текст поста...</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Нравится</Button>
                                <Button size="small">Комментировать</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        {/* Сюда можно добавить что-то ещё, например список друзей, рекламу и т.д. */}
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default App;


const Logo = styled.img`
    max-width: 30px;
`