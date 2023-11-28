import { useContext } from "react"
import { styled } from "styled-components"
import { IngredientsContext } from "../IngredientsContext"
import CardIngredient from "../CardIngredient"
import SelectedIngredients from "../SelectedIngredients"

const Main = styled.main`
    border-radius: 60px 60px 0px 0px;
    background: var(--cream, #FFFAF3);
    padding: 100px 120px;

`

const Title = styled.h3`
    color: var(--medium-green, #3D6D4A);
    text-align: center;
    font-family: Paytone One;
    font-size: 37px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
`

const Paragraph = styled.p`
    color: var(--grey, #444);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    margin: 32px 0;
`

const CardsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    align-items: stretch;

`

const Ingredients = () => {
    const { categories } = useContext(IngredientsContext);
    return (
        <Main>
            <SelectedIngredients />
            <Title>Ingredientes</Title>
            <Paragraph>
                Selecione abaixo os ingredientes que você quer usar nesta receita:
            </Paragraph>
            <CardsContainer>
                {categories.map(category => <CardIngredient category={category} key={category.id}/>)}
            </CardsContainer>
        </Main>
    )
}

export default Ingredients