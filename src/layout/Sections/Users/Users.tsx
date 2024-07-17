import * as React from 'react';
import {UserType} from "../../../redux/users-reducer";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Grid} from "@mui/material";
import styled from "styled-components";


type Props = {
    users: UserType[]
    followUser: (userId: string, isFollow: boolean) => void
}

export const Users = ({users, followUser}: Props) => {

    const onClickHandler = (userId: string, isFollow: boolean) => {
        followUser(userId, isFollow)
    }
const onClickShowMoreHandler = () => {

    }

    return (
        <StyledSection>
            <h1>Users</h1>
            {users.map(user => {
                return (
                    <Box key={user.id} width="100%" p={2} display="flex" alignItems="center" justifyContent="space-between">
                        <Box width="25%" display="flex" flexDirection="column" alignItems="center">
                            <Avatar alt={'user'} src={user.avatar} sx={{ width: 100, height: 100, mb: 2 }} />
                            <Button variant="contained" sx={{ mt: 2 }}
                                    onClick={() => onClickHandler(user.id, user.isFollow)}>{user.isFollow ? 'Follow' : 'Unfollow'}
                            </Button>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                        <Box width="70%">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h5">{user.name}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">{user.status}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">{user.country}, {user.city}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                )
            })}
            <Button variant="contained" sx={{ mt: 2 }}
                    onClick={() => onClickShowMoreHandler()}>Show more</Button>
        </StyledSection>
    );
};

const StyledSection = styled.div`
    flex-grow: 1;
    
    height: calc(100vh - 60px);
    background-color: #c8e0ff33;
`