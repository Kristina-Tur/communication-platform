import * as React from 'react';
import {UsersPageType, UserType} from "../../../redux/users-reducer";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Grid} from "@mui/material";
import styled from "styled-components";
import {v1} from "uuid";
import axios from "axios";
import avatar from './../../../assets/images/avatar.png'


type Props = {
    users: UserType[]
    followUser: (userId: number, isFollow: boolean) => void
    setUsers: (users: UserType[]) => void
}

const instance = {
    withCredentials: true,
    headers: {
        "API-KEY": "0d6fcc4b-d0b8-4c34-b068-91acef8dc727"
    }
}

export const UsersFunc = ({users, followUser, setUsers}: Props) => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users', instance)
        .then(res => setUsers(res.data.items))
    /*if (users.length === 0) {
        setUsers([
            {
                id: v1(),
                name: 'Max',
                avatar: 'https://via.placeholder.com/150/92c952',
                isFollow: true,
                status: 'I like football',
                country: 'Belarus',
                city: 'Brest'
            },
            {
                id: v1(),
                name: 'John',
                avatar: 'https://via.placeholder.com/150/771796',
                isFollow: true,
                status: 'I like swim',
                country: 'US',
                city: 'New York'
            },
            {
                id: v1(),
                name: 'Mike',
                avatar: 'https://via.placeholder.com/150/24f355',
                isFollow: false,
                status: 'I like football',
                country: 'Belarus',
                city: 'Minsk'
            }
        ])
    }*/


    const onClickHandler = (userId: number, isFollow: boolean) => {
        followUser(userId, isFollow)
    }
    const onClickShowMoreHandler = () => {

    }

    return (
        <StyledSection>
            <h1>Users</h1>
            {users.map(user => {
                return (
                    <Box key={user.id} width="100%" p={2} display="flex" alignItems="center"
                         justifyContent="space-between">
                        <Box width="25%" display="flex" flexDirection="column" alignItems="center">
                            <Avatar alt={'user'} src={user.photos.small === null ? avatar : user.photos.small}
                                    sx={{width: 100, height: 100, mb: 2}}/>
                            <Button variant="contained" sx={{mt: 2}}
                                    onClick={() => onClickHandler(user.id, user.followed)}>{user.followed ? 'Follow' : 'Unfollow'}
                            </Button>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{mx: 2}}/>
                        <Box width="70%">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h5">{user.name}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">{user.status}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">England, London</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                )
            })}
            <Button variant="contained" sx={{mt: 2}}
                    onClick={() => onClickShowMoreHandler()}>Show more</Button>
        </StyledSection>
    );
};

const StyledSection = styled.div`
    flex-grow: 1;

    height: calc(100vh - 60px);
    background-color: #c8e0ff33;
`