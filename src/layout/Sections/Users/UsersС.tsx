import React, { Component } from 'react';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import avatar from "../../../assets/images/avatar.png";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { UserType } from "../../../redux/users-reducer";
import axios from "axios";
import s from './style.module.css';

type UsersProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number, isFollow: boolean) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0d6fcc4b-d0b8-4c34-b068-91acef8dc727'
    }
});

export class UsersC extends Component<UsersProps, any> {
    componentDidMount() {
        this.fetchUsers(this.props.currentPage);
    }

    componentDidUpdate(prevProps: UsersProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.fetchUsers(this.props.currentPage);
        }
    }

    fetchUsers = (currentPage: number) => {
        instance.get(`users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            })
            .catch(rej => console.log(rej));
    }

    onClickFollowUser = (userId: number, isFollow: boolean) => {
        this.props.followUser(userId, isFollow);
    }

    handlePageChange = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
    }

    renderContent = () => {
        return (
            <div>
                {this.props.users.map((user: UserType) => (
                    <Box key={user.id} width="100%" p={2} display="flex" alignItems="center"
                         justifyContent="space-between">
                        <Box width="25%" display="flex" flexDirection="column" alignItems="center">
                            <Avatar alt={'user'} src={user.photos.small === null ? avatar : user.photos.small}
                                    sx={{ width: 100, height: 100, mb: 2 }} />
                            <Button variant="contained" sx={{ mt: 2 }}
                                    onClick={() => this.onClickFollowUser(user.id, user.followed)}>{user.followed ? 'Follow' : 'Unfollow'}
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
                                    <Typography variant="body1">England, London</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                ))}
            </div>
        );
    }

    renderPagination = () => {
        let totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];

        // Отображаем первые 3 страницы
        for (let i = 1; i <= Math.min(3, totalPages); i++) {
            pages.push(i);
        }

        // Если текущая страница больше 3, добавляем "..."
        if (this.props.currentPage > 3) {
            pages.push('...');
        }

        // Отображаем страницы вокруг текущей страницы
        const startPage = Math.max(this.props.currentPage - 1, 4);
        const endPage = Math.min(this.props.currentPage + 1, totalPages - 1);
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Если текущая страница меньше totalPages - 2, добавляем "..."
        if (this.props.currentPage < totalPages - 2) {
            pages.push('...');
        }

        // Отображаем последние 3 страницы
        for (let i = Math.max(totalPages - 2, this.props.currentPage + 2); i <= totalPages; i++) {
            pages.push(i);
        }

        return (
            <div className="pagination">
                {pages.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' && this.handlePageChange(page)}
                        disabled={page === this.props.currentPage || typeof page !== 'number'}
                        style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer', fontSize: '24px' }}
                    >
                        {page}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <StyledSection>
                <h1>Users</h1>
                <div>
                    {this.renderPagination()}
                    {this.renderContent()}
                </div>
                <Button variant="contained" sx={{ mt: 2 }}
                        onClick={() => { }}>Show more</Button>
            </StyledSection>
        );
    }
}

const StyledSection = styled.div`
    flex-grow: 1;
    height: calc(100vh - 60px);
    background-color: #c8e0ff33;
`
