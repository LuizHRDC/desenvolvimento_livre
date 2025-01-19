import Header from "../components/Header"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import { Container } from "./ComoPararStyled"

function ComoParar() {
    const dicas = [
        {
            title: "Defina uma data para parar",
            description:
                "Escolha uma data próxima e comprometa-se a parar de fumar nesse dia. Isso ajuda a estabelecer uma meta concreta e motivacional.",
        },
        {
            title: "Busque apoio",
            description:
                "Falar com amigos, familiares ou até um profissional pode fazer a diferença. O apoio social é essencial para alcançar o sucesso.",
        },
        {
            title: "Evite gatilhos",
            description:
                "Identifique os momentos em que você costuma fumar e tente evitá-los, como durante o estresse ou após refeições.",
        },
        {
            title: "Substitua o cigarro por algo saudável",
            description:
                "Mastigar chicletes, comer frutas ou praticar atividades físicas podem ser formas saudáveis de lidar com a vontade de fumar.",
        },
        {
            title: "Use terapias de substituição de nicotina",
            description:
                "Gomas de nicotina, adesivos ou inaladores podem ajudar a reduzir os sintomas de abstinência durante o processo de parar de fumar.",
        },
        {
            title: "Mantenha-se motivado",
            description:
                "Lembre-se constantemente dos benefícios de parar de fumar, como melhor saúde, mais dinheiro e maior qualidade de vida.",
        },
    ]

    return (
        <>
            <Navbar />
            <Container>
                <Header title="Como Parar?" />
                {dicas.map((dica, index) => (
                    <Card key={index} title={dica.title} description={dica.description} />
                ))}
            </Container>
        </>
    )
}

export default ComoParar
