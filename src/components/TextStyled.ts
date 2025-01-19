import styled from "styled-components";

const TextContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    width: 800px;
    text-align: center;
    background-color: #FFDD03;
    margin: 10px; 
`;

const TextTitle = styled.h3`
    font-size: 1.2rem;
    color: #333;
    margin: 12px 0;
`;

const TextDescription = styled.p`
    font-size: 1rem;
    color: #444;
    text-align: justify
`;

export { TextContainer, TextTitle, TextDescription };
