import styled from "styled-components";

export const Ul = styled.ul`    
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: #F2C404;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
      padding: 18px 10px;
      cursor: pointer;
    }

    @media (min-width: 690px){
      transition: unset;
      position: initial;
      list-style: none;
      display: flex;
      justify-content: end;
      align-items: center;
      li {
        padding: 0px 10px;
      }
      flex-flow: row nowrap;
      transform: initial;
      width: 100%;
      height: 20px;
      padding: 0px;
      
      background-color: transparent;
    }
    
`