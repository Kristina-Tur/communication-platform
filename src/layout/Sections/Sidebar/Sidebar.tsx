// @flow
import * as React from 'react';
import {Drawer, Grid, List, ListItem, ListItemText} from "@mui/material";
import logo from "../../../images/twitterLOGO.svg";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";

type Props = {};
export const Sidebar = (props: Props) => {
    return (
        <Grid>
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
    );
};

const Logo = styled.img`
    max-width: 30px;
`