import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { Container } from "./ConsequenciasStyled"
import Text from "../components/Text"

function Consequencias() {
    return (
        <>
            <Navbar />
            <Container>
                <Header title="Consequências do Tabagismo" />
                <Text
                    title="As Consequências do Tabagismo"
                    description="
                        O tabagismo é uma das principais causas de doenças graves em todo o mundo. Fumar afeta negativamente praticamente todos os sistemas do corpo humano. 
                        O uso contínuo do tabaco está diretamente relacionado ao aumento do risco de doenças respiratórias, como bronquite crônica e enfisema pulmonar. 
                        Além disso, o tabagismo é a principal causa do câncer de pulmão e aumenta significativamente o risco de câncer em outras partes do corpo, incluindo boca, garganta e bexiga.

                        Outro efeito grave do tabagismo é o impacto no sistema cardiovascular. Fumar eleva a pressão arterial e o nível de colesterol ruim, o que aumenta as chances de sofrer com doenças cardíacas, como infarto do miocárdio e acidente vascular cerebral (AVC). Além disso, o tabagismo prejudica a circulação sanguínea e afeta a saúde das artérias.

                        Além dos riscos para a saúde física, o tabagismo também enfraquece o sistema imunológico, tornando o corpo mais vulnerável a infecções e doenças. Ele também prejudica a capacidade do corpo de se recuperar de lesões e afeta a cicatrização de feridas.

                        Fumar também acelera o processo de envelhecimento, causando o aparecimento precoce de rugas e diminuindo a elasticidade da pele. O fumo reduz a produção de colágeno, uma proteína essencial para manter a pele firme e jovem.

                        As mulheres fumantes podem enfrentar dificuldades para engravidar, enquanto nos homens, o tabagismo pode reduzir a qualidade e a quantidade de espermatozoides, afetando diretamente a fertilidade.

                        Em resumo, o tabagismo tem efeitos devastadores sobre a saúde, aumentando os riscos de doenças graves e diminuindo a qualidade de vida de quem fuma. A melhor forma de prevenir essas consequências é parar de fumar, buscando ajuda e apoio para iniciar esse processo e melhorar a saúde a longo prazo.
                    "
                />
            </Container>
        </>
    )
}

export default Consequencias
