import styled from "styled-components";
import { Link } from "react-router-dom"

export const Head = styled.header`
    height: 5vh;
    display: flex;
    justify-content: space-between;
    padding-top: 4%;
    padding-bottom: 2%;
    background-color: ${props => props.theme.colors.primary};
`;

export const HeaderName = styled.h1`
    padding-left: 3%;
    color: ${props => props.theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


export const HeaderMenu = styled.ul`
    display: flex;
    gap: 5vh;
    padding-right: 3%;
    color: ${props => props.theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ItemsLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    translation: filter .2s;
    &:hover {
        filter: brightness(0.8);
    }
`
