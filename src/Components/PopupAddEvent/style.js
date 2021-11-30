

import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0px;
    padding: 0px 30px;
    box-sizing: border-box;
    @media (min-width: 800px){
        justify-content: center;
        margin: 0px;
    }
`;


export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border: 2px solid #F5F5F5;
    padding: 26px 19px 26px 19px;
    width: 100%;
    margin-top: 30px;
    h3{
        margin-bottom: 20px;
    }
`;


export const Error = styled.ul`
    margin: 0px;
    text-align: start;
    margin-bottom: 15px;
    margin-top: ${props => props.margin ? `${props.margin}px`: "-5px"};
    font-size: 10px;
    color: rgb(240, 42, 42);
    padding: 0px 0px 0px 5px;
    
    li{
        list-style: inside;
    }
`;

export const DivA = styled.div`
    position: fixed;
    background-color: rgba(51, 51, 51, 0.5);;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0px;    
`;

export const DivContainer = styled.div` 
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 280px;
    margin-top: 100px;
    padding: 13px 22px 26px 22px;
    span{
        text-align: right;
        font-size: 20px;
    }
`;