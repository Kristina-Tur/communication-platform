import * as React from 'react';
import Button from "@mui/material/Button";
import styled from "styled-components";
import {UserType} from "../../../model/users-reducer";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import avatar from "../../../../../assets/images/avatar.png";
import Divider from "@mui/material/Divider";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Loader} from "../../../../../common/components/loader/Loader";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../app/store-redux";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    handlePageChange: (page: number) => void
    followingInProgress: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
};
export const Users = ({
                          users,
                          currentPage,
                          pageSize,
                          totalUsersCount,
                          handlePageChange,
                          followingInProgress,
                          follow,
                          unFollow
                      }: UsersPropsType) => {

    let totalPages = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    // Отображаем первые 3 страницы
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
        pages.push(i);
    }

    // Если текущая страница больше 3, добавляем "..."
    if (currentPage > 3) {
        pages.push('...');
    }

    // Отображаем страницы вокруг текущей страницы
    const startPage = Math.max(currentPage - 1, 4);
    const endPage = Math.min(currentPage + 1, totalPages - 1);
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    // Если текущая страница меньше totalPages - 2, добавляем "..."
    if (currentPage < totalPages - 2) {
        pages.push('...');
    }

    // Отображаем последние 3 страницы
    for (let i = Math.max(totalPages - 2, currentPage + 2); i <= totalPages; i++) {
        pages.push(i);
    }
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    console.log(users)
    return (
        <StyledSection>
            <h1>Users</h1>
            <div>
                {isLoading && <Loader/>}
                <div className="pagination">
                    {pages.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && handlePageChange(page)}
                            disabled={page === currentPage || typeof page !== 'number'}
                            style={{margin: '0 5px', padding: '5px 10px', cursor: 'pointer', fontSize: '24px'}}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <div>
                    {users.map((user: UserType) => (
                        <Box key={user.id} width="100%" p={2} display="flex" alignItems="center"
                             justifyContent="space-between">
                            <Box width="25%" display="flex" flexDirection="column" alignItems="center">
                                <NavLink to={'/profile/' + user.id}>
                                    <Avatar alt={'user'} src={user.photos.small === null ? avatar : user.photos.small}
                                            sx={{width: 100, height: 100, mb: 2}}/>
                                </NavLink>
                                {user.followed ?
                                    <Button disabled={followingInProgress.some(id => id === user.id)}
                                            variant="contained" sx={{mt: 2}}
                                            onClick={() => {
                                                unFollow(user.id)
                                            }}
                                    >
                                        Unfollow
                                    </Button>

                                    : <Button disabled={followingInProgress.some(id => id === user.id)}
                                              variant="contained" sx={{mt: 2}}
                                              onClick={() => {
                                                  follow(user.id)
                                              }}
                                    >
                                        Follow
                                    </Button>
                                }
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
                    ))}
                </div>
            </div>
            <Button variant="contained" sx={{mt: 2}}
                    onClick={() => {
                    }}>Show more</Button>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    flex-grow: 1;
    min-height: calc(100vh - 60px);
    background-color: #c8e0ff33;
`