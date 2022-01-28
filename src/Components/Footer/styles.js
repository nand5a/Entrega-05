import styled from "styled-components";

export const Foot = styled.footer`
    height: 35vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 2%;
    background-color: ${props => props.theme.colors.footer};
`

export const Container = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4%;
    padding-bottom: 2%;
    font-size: small;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`