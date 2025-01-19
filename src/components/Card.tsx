import { CardContainer, CardTitle, CardDescription } from "./CardStyled"

interface CardProps {
    title: string
    description: string
}

function Card({ title, description }: CardProps) {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}

export default Card
