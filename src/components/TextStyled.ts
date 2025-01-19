import styled from "styled-components";

const TextContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    width: 800px;
    text-align: center;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px; 
`;

const TextTitle = styled.h3`
    font-size: 1.2rem;
    color: #333;
    margin: 12px 0;
`;

const TextDescription = styled.p`
    font-size: 1rem;
    color: #666;
`;

export { TextContainer, TextTitle, TextDescription };
