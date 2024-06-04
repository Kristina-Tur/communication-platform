// @flow
import * as React from 'react';
import {Drawer, Grid, List, ListItem, ListItemText} from "@mui/material";
import logo from "../../../images/twitterLOGO.svg";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import {v1} from "uuid";

type Props = {};
export const Navbar = (props: Props) => {

    const nav = [
        {id: v1(), title: 'Profile', href: '/profile'},
        {id: v1(), title: 'Dialogs', href: '/dialogs'},
    ]

    return (
        <Grid>
            <Drawer sx={{width: 250}} variant="permanent" anchor="left">
                <a href={'#'}>
                    <Logo src={logo} alt={'logo'}/>
                </a>
                <List>
                    {nav.map((nav, index) => (
                        <ListItem key={nav.id} disablePadding>
                            <ListItemButton href={nav.href}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={nav.title}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Grid>
    );
};

const Logo = styled.img`
    max-width: 30px;
`