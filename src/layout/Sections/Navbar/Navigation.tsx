import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export function Navigation() {
    return (
        <nav className='nav'>
            <StyledUl>
                <StyledLi >
                    <StyledLink to='/profile'>Profile</StyledLink>
                </StyledLi>
                <StyledLi ><StyledLink to='/dialogs'>Messages</StyledLink> </StyledLi>
                <StyledLi ><StyledLink to='/news'>News</StyledLink> </StyledLi>
                <StyledLi ><StyledLink to='/music'>Music</StyledLink> </StyledLi>
                <StyledLi ><StyledLink to='/settings'>Settings</StyledLink> </StyledLi>
            </StyledUl>
        </nav>
    )
}

const StyledUl = styled.ul `
    list-style-type: none;
    display: flex;
    flex-direction: column;
    /*max-width: 250px;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;*/
`

const StyledLi = styled.li`
  cursor: pointer;
  text-decoration: none;
`
const StyledLink = styled(NavLink) `
color: black;
  cursor: pointer;
text-decoration: none;

&.active {
  color: rgb(4, 149, 159)
;
  }
`