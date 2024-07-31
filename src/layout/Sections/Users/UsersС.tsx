import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import avatar from "../../../assets/images/avatar.png";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import {UserType} from "../../../redux/users-reducer";
import axios from "axios";

type UsersProps = {
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

export class UsersC extends React.Component<UsersProps, any> {

    constructor(props: UsersProps) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users', instance)
            .then(res => this.props.setUsers(res.data.items))
    }

    getUsers = () => {
    }

    onClickFollowUser = (userId: number, isFollow: boolean) => {
        this.props.followUser(userId, isFollow)
    }

    render() {
        return (
            <StyledSection>
                <h1>Users</h1>
                {this.props.users.map((user: UserType) => {
                    return (
                        <Box key={user.id} width="100%" p={2} display="flex" alignItems="center"
                             justifyContent="space-between">
                            <Box width="25%" display="flex" flexDirection="column" alignItems="center">
                                <Avatar alt={'user'} src={user.photos.small === null ? avatar : user.photos.small}
                                        sx={{width: 100, height: 100, mb: 2}}/>
                                <Button variant="contained" sx={{mt: 2}}
                                        onClick={() => this.onClickFollowUser(user.id, user.followed)}>{user.followed ? 'Follow' : 'Unfollow'}
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
                        onClick={this.getUsers}>Show more</Button>
            </StyledSection>
        );
    }
}

const StyledSection = styled.div`
    flex-grow: 1;

    height: calc(100vh - 60px);
    background-color: #c8e0ff33;
`