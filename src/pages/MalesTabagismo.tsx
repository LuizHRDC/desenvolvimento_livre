import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import { Container } from "./MalesTabagismoStyled"

function MalesTabagismo() {
    const categorias = [
        { title: "Coração", description: "Aumento do risco de doenças cardiovasculares." },
        {
            title: "Pulmão",
            description:
                "Dano aos pulmões, incluindo câncer de pulmão e doenças respiratórias crônicas.",
        },
        {
            title: "Sistema Imunológico",
            description:
                "Comprometimento do sistema imunológico, tornando o corpo mais vulnerável a infecções.",
        },
    ]

    return (
        <>
            <Header title="Males do Tabagismo" />
            <Navbar />

            <Container>
                {categorias.map((categoria, index) => (
                    <Card key={index} title={categoria.title} description={categoria.description} />
                ))}
            </Container>
        </>
    )
}

export default MalesTabagismo
