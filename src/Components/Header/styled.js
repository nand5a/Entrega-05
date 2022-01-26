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
    background-color: blue;
`;

export const HeaderName = styled.h1`
    padding-left: 3%;
    color: antiquewhite;
`;


export const HeaderMenu = styled.li`
    display: flex;
    gap: 5vh;
    padding-right: 3%;
`;
