// @flow
import * as React from 'react';
import styled from "styled-components";
import avatar from "../../../../assets/images/avatar.svg";
import {NavLink, Redirect} from "react-router-dom";
import {logoutTC} from "../../../auth/model/auth-reducer";
import {Theme} from "../../../../app/styles/Theme";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store-redux";

type HeaderProps = {
}

export const Header = ({}: HeaderProps) => {
    const dispatch = useDispatch()
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn)
    const login = useSelector<AppRootStateType, string>(state => state.auth.login)
    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <StyledHeader>
            {isLoginIn
                ? <Wrapper>
                    <ListItemLink to={'/profile'}>
                        <span>Hello, {login}!</span>
                        <StyledImg src={avatar} alt="avatar"/>
                    </ListItemLink>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={logoutHandler}
                    >
                        <ListItemLinkLog to={'/login'}>
                            Logout
                        </ListItemLinkLog>
                    </Button>
                </Wrapper>
                : ''
            }


        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    min-height: 60px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledImg = styled.img`
    width: 50px;
`
const ListItemLink = styled(NavLink)`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.6;
    color: ${Theme.colors.primaryText};
    transition: ${Theme.animations.transition};
    margin-right: 50px;
    display: flex;
    align-items: center;

    &:hover {
        color: black;
    }
`
const ListItemLinkLog = styled(NavLink)`
    color: white;
`
