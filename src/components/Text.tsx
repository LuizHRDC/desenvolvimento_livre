import { TextContainer, TextTitle, TextDescription } from "./TextStyled"

interface TextProps {
    title: string
    description: string
}

function Text({ title, description }: TextProps) {
    return (
        <TextContainer>
            <TextTitle>{title}</TextTitle>
            <TextDescription>{description}</TextDescription>
        </TextContainer>
    )
}

export default Text
