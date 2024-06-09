// @flow
import * as React from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import avatar from "../../images/avatar.svg";

type Props = {};
export const AvatarHeader = (props: Props) => {
    return (
        <List >
            <ListItem sx={{
                gap: '20px'
            }}>
                <ListItemText>
                    <Typography variant="body1">Hey, Jo!</Typography>
                </ListItemText>
                <ListItemAvatar>
                    <Avatar src={avatar} alt={'text'}/>
                </ListItemAvatar>

            </ListItem>
        </List>
    );
};