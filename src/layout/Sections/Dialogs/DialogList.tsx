/*
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const DialogList = ({ dialogs, onSelectDialog }) => {
    return (
        <List component="nav">
            {dialogs.map((dialog) => (
                <React.Fragment key={dialog.id}>
                    <ListItem button onClick={() => onSelectDialog(dialog.id)}>
                        <ListItemText primary={dialog.name} secondary={dialog.lastMessage} />
                    </ListItem>
                    <Divider component="li" />
                </React.Fragment>
            ))}
        </List>
    );
}

export default DialogList;*/
