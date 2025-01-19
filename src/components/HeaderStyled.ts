import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #282c34;
    padding: 20px;
    text-align: left;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
`;

const HeaderTitle = styled.h1`
    color: #61dafb;
    font-size: 2rem;
`;

export { HeaderContainer, HeaderTitle };
