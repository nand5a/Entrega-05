import styled from "styled-components"

export const Content = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: space-around;
    gap: 10px;
    padding: 2%;
`
export const ReturnButton = styled.button`
    width: 10vw;
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
`