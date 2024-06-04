import React from 'react';
import logo from "../images/twitterLOGO.svg";
import avatar from "../images/avatar-svgrepo-com.svg";
import styled from "styled-components";
import {Theme} from "../styles/Theme";


export const Header = () => {
    return (
        <SHeader>
            <Container>
                <Wrapper>
                    <a href={'#'}>
                        <Logo src={logo} alt={'logo'}/>
                    </a>
                    <WrapperAvatar>
                        <span>Hey, Jo!</span>
                        <Avatar src={avatar} alt={'avatar'}/>
                    </WrapperAvatar>
                </Wrapper>
            </Container>
        </SHeader>
    );
};
const SHeader = styled.header`
    background-color: ${Theme.colors.secondary};
    max-height: 60px;

    padding: 20px 0;

`
const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    max-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
`

const Logo = styled.img`
    max-width: 30px;
`
const Avatar = styled.img`
    max-width: 50px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

`
const WrapperAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`