import styled from "styled-components";

export const Button = styled.button`
    background-color: #F2C404;
    color:  black;
    width: ${props => props.width ? "40%":"100%"};
    padding: 10px;
    border-radius: 5px;
    border: 0px;
    margin: 20px 0px 0px 0px;
    cursor: pointer;
`;