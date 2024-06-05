import React, { useState } from 'react';
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import {Avatar, ListItemAvatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const dialogs = [
    { id: 1, name: 'Max', avatar: 'https://via.placeholder.com/150/92c952' },
    { id: 2, name: 'John', avatar: 'https://via.placeholder.com/150/771796' },
    { id: 3, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355' },
    { id: 4, name: 'Jane', avatar: 'https://via.placeholder.com/150/771796' },
    { id: 5, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355' },
    { id: 6, name: 'Alex', avatar: 'https://via.placeholder.com/150/92c952'  },
];

export const DialogList = () => {
    const [selectedDialog, setSelectedDialog] = useState(null);

    const handleDialogClick = (dialog: any) => {
        setSelectedDialog(dialog);
    };

    return (
        <List sx={{ maxWidth: 360, marginTop: '50px'}}>
            {dialogs.map((dialog) => (
                <ListItem
                    key={dialog.id}
                    button
                    onClick={() => handleDialogClick(dialog)}
                    selected={selectedDialog === dialog}
                    sx={{
                        '&:hover': {
                            bgcolor: 'action.hover',
                        },
                        '&.Mui-selected': {
                            bgcolor: 'action.selected',
                        },
                    }}
                >
                    <ListItemAvatar>
                        <Avatar alt={dialog.name} src={dialog.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={dialog.name} />
                </ListItem>
            ))}

        </List>
    );
};


