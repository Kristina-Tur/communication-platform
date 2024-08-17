// @flow
import * as React from 'react';
import styled from "styled-components";
import avatar from "../../../../assets/images/avatar.svg";
import {NavLink} from "react-router-dom";
import {AuthDataType} from "../../../auth/model/auth-reducer";

type HeaderProps = {
    isAuth: boolean
    login: string
}

export const Header = ({isAuth, login}: HeaderProps) => {
    return (
        <StyledHeader>
            {isAuth
                ? <span>Hello, {login}!</span>
                : <NavLink to={'/login'}>
                    Login
                </NavLink>}
            <NavLink to={'/profile'}>
                <StyledImg src={avatar} alt="avatar"/>
            </NavLink>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    margin-right: 30px;
    min-height: 60px;
`

const StyledImg = styled.img`
    width: 50px;
`
