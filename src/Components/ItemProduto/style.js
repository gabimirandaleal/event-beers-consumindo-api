import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 280px;
    height: 37  0px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 10px ;
    box-sizing: border-box;
    img{
        height: 150px;
    }
`;

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    h3{
        font-size: 14px;
        text-align: center;
        margin-bottom: 10px;
        border-top: 1px solid grey;
        width: 100%;
        padding: 10px 0 0 0;
        font-weight: bold;
        font-size: 20px;
    }
    span{
        color: black;
        font-size: 15px;
    }

    span ~ span{
        margin-top: 10px;
    }

    img{
        margin-bottom: 10px;
    }
`;