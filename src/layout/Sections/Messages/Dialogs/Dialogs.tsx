import React, {useState} from 'react';
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import {Avatar, ListItemAvatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

type Props = {
    dialogs: DialogListType[]
};

export type DialogListType = {
    id: number
    name: string
    avatar: string
}

export const Dialogs = ({dialogs}: Props) => {
    const [selectedDialog, setSelectedDialog] = useState(null);

    const handleDialogClick = (dialog: any) => {
        setSelectedDialog(dialog);
    };

    return (
        <List sx={{maxWidth: '150px', width: '100%', height: 'max-content',borderRight: '1px solid rgb(217, 217, 217)'}}>
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
                        <Avatar alt={dialog.name} src={dialog.avatar}/>
                    </ListItemAvatar>
                    <ListItemText primary={dialog.name}/>
                </ListItem>
            ))}

        </List>
    );
};


