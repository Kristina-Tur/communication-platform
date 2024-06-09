// @flow
import * as React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import {AvatarHeader} from "./AvatarHeader";

type Props = {

};
export const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'end',
                gap: '20px',
                backgroundColor: '#fff',
                color: '#000'
            }}>
                <AvatarHeader/>
            </Toolbar>
        </AppBar>
    );
};