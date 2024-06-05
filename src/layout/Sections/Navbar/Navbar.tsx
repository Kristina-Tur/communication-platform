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
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

type Props = {};
export const Navbar = (props: Props) => {

    const nav = [
        {id: v1(), title: 'Profile', href: '/profile'},
        {id: v1(), title: 'Dialogs', href: '/dialogs'},
    ]


    return (
            <Drawer sx={{ width: 200, '& .MuiDrawer-paper': { width: 200, padding: '20px'},  }}
                    variant="permanent" anchor="left">
                <a href={'#'} style={{marginBottom: '20px'}}>
                    <Logo src={logo} alt={'logo'}/>
                </a>
                <List>
                    {nav.map((nav, index) => (
                        <ListItem key={nav.id} disablePadding className={s.item}>
                               <NavLink to={nav.href} style={{display: 'flex'}}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={nav.title}/>
                                </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
    );
};

const Logo = styled.img`
    max-width: 30px;
`