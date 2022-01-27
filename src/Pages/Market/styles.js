import styled from "styled-components";

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
    margin: 2%;
`;

export const MarketList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 20px;
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: space-between;
    width: 350px;
    height: 350px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${props => props.theme.colors.primary};
    padding: 20px;
    margin: 20px;

    img{
        height: 200px;
        width: 200px;
    }
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
