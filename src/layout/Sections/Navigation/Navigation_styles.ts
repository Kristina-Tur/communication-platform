import styled from "styled-components";
import {NavLink} from 'react-router-dom'

const Nav = styled.nav`
flex-shrink: 0; 
max-width: 200px; 
width: 100%;
`

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: white;
`

const Li = styled.li`
    cursor: pointer;
    text-decoration: none;
`
const Link = styled(NavLink)`
    color: black;
    cursor: pointer;
    text-decoration: none;

    &.active {
        color: rgb(4, 149, 159);
    }
`

export const S = {
    Nav,
    Ul,
    Li,
    Link
}