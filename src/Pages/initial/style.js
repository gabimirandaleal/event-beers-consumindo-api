import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div{
        margin: 10px;
    }
`;

export const DivButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    max-width: 700px;
    margin: auto;
    button ~ button{
        margin-left: 10px;
    }
`;


