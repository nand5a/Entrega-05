import styled from "styled-components";

export const MenuItem = styled.h3`
    height: 5vh;
    font-weight:bolder;
    &:hover{
        color:springgreen;
        border-bottom: 2px solid silver;
    }
`;

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 4%;
    padding-bottom: 2%;
    background-color: ${props => props.theme.colors.primary};
`;

export const HeaderName = styled.h1`
    padding-left: 3%;
    color: ${props => props.theme.colors.text};
`;


export const HeaderMenu = styled.ul`
    display: flex;
    gap: 5vh;
    padding-right: 3%;
    color: ${props => props.theme.colors.text};
`;

export const itensMenu = styled.li`
        font-size: 20px;

    a{
        text-decoration: none;
        color: $props => props.theme.colors.text};
        translation: filter .2s;
    }

    a:hover{
        filter: brightness(0.8);
    }
`
