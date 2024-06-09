import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export function Navigation() {
    return (
        <nav className='nav' style={{flexShrink: '0', maxWidth: '200px', width: '100%'}}>
            <StyledUl>
                <StyledLi>
                    <StyledLink to='/profile'>Profile</StyledLink>
                </StyledLi>
                <StyledLi><StyledLink to='/dialogs'>Messages</StyledLink> </StyledLi>
                <StyledLi><StyledLink to='/news'>News</StyledLink> </StyledLi>
                <StyledLi><StyledLink to='/music'>Music</StyledLink> </StyledLi>
                <StyledLi><StyledLink to='/settings'>Settings</StyledLink> </StyledLi>
            </StyledUl>
        </nav>
    )
}

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: white;
`

const StyledLi = styled.li`
    cursor: pointer;
    text-decoration: none;
`
const StyledLink = styled(NavLink)`
    color: black;
    cursor: pointer;
    text-decoration: none;

    &.active {
        color: rgb(4, 149, 159);
    }
`