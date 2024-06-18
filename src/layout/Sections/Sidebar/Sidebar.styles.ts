import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import {Theme} from "../../../styles/Theme";

const Aside = styled.nav`
    flex-shrink: 0;
    max-width: 200px;
    width: 100%;
    
    display: flex;
    justify-content: center;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`
const ListItemLink = styled(NavLink)`
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${Theme.colors.primaryText};
    transition: ${Theme.animations.transition};

    &:hover{
        color: black;
    }
    
    &.active {
        color: ${Theme.colors.accent};
    }
`

export const S = {
    Aside,
    ListItem,
    ListItemLink
}