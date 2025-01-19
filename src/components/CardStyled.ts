import styled from "styled-components";

const CardContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    width: 300px;
    text-align: center;
    background-color: #FFDD03;
    margin: 10px; 
`;

const CardTitle = styled.h3`
    font-size: 1.2rem;
    color: #333;
    margin: 12px 0;
`;

const CardDescription = styled.p`
    font-size: 1rem;
    color: #666;
`;

export { CardContainer, CardTitle, CardDescription };
