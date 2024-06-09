// @flow
import * as React from 'react';
import styled from "styled-components";
import avatar from "../../assets/images/avatar.svg";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader className="header">
                <FlexWrapper alignItems={'center'} justifyContent={'flex-end'} gap={'20px'}>
                    <span>Hello, Jo!</span>
                    <StyledImg src={avatar} alt="avatar" />
                </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 30px;
    min-height: 60px;
`

const StyledImg = styled.img`
    width: 50px;
`
