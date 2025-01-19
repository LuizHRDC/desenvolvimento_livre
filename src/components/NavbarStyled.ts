import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
    background-color: #333;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;   
    top: 110px;            
    left: 0;
    width: 100%;       
    z-index: 1000;
`;

const NavLinkStyled = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
        background-color: #555;
        color: #ccc;
    }

    &.active {
        text-decoration: underline;
    }
`;

export { NavContainer, NavLinkStyled };
