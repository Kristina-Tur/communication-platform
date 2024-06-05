import React from 'react';
import {Avatar, ListItemAvatar, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const messages = [
    { id: 1, author: 'Max', text: 'Hello, John!', date: '2023-03-01 10:00' },
    { id: 2, author: 'John', text: 'Hi, Max!', date: '2023-03-01 10:01' },
    { id: 3, author: 'Max', text: 'How are you?', date: '2023-03-01 10:02' },
];

export  const MessageList = () => {
    return (
        <List sx={{ maxWidth: 360, bgcolor: 'background.paper', marginTop: '100px', marginRight: '250px' }}>
            {messages.map((message) => (
                <ListItem key={message.id}>
                    <ListItemAvatar>
                        <Avatar alt={message.author} src={`https://via.placeholder.com/150/${Math.floor(
                            Math.random() * 16777215
                        ).toString(16)}`} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={message.author}
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                    {message.text}
                                </Typography>
                                {' — '}
                                <Typography sx={{ display: 'inline' }} variant="body2" color="text.secondary">
                                    {new Date(message.date).toLocaleTimeString()}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
};

