import styled from "styled-components";

export const Container = styled.div`
    padding-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6vh;
`;

export const ContainerName = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: cornflowerblue;
    border-bottom: 1px solid silver;
    width: 20vw;
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    width: 60%;
    gap: 2vh;
`;

export const MarketList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vh;
    margin-bottom: 10%;
`;

export const Input = styled.input`
    width: 20vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    background-color: cornflowerblue;
    font-size: large;
    padding-right: 10px;
    padding-left: 10px;
`;

export const ResetButton = styled.button`
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

export const MarketContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vh;

`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: cornflowerblue;
    border-bottom: 1px solid silver;
    width: 20vw;
`;

export const CardList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
`;