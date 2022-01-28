import styled from "styled-components";
import { Link } from "react-router-dom"

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vh;
    margin-bottom: 10%
`;

export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: cornflowerblue;
    border-bottom: 1px solid silver;
    width: 20vw;
    margin-top: 1%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const MarketList = styled.div`
    display: flex;
    flex-direction: row;
    aling-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 20px;
`

export const Product = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    height: 350px;
    background-color: ${props => props.theme.colors.background};
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${props => props.theme.colors.primary};
    padding: 20px;
    margin: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    img{
        height: 200px;
        width: 300px;
        border-radius: 10px;
    }
`

export const DetailsLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
`

export const AddButton = styled.button`
    width: 20vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    background-color: cornflowerblue;
    color: antiquewhite;
    font-size: large;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;


