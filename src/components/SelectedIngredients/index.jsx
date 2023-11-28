import { useContext } from "react"
import { IngredientsContext } from "../IngredientsContext"
import { styled } from "styled-components"
import TagIngredient from "../TagIngredient"


const Title = styled.h3`
    color: var(--coral, #F0633C);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 31px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    margin-bottom: 24px;
`

const SelectedIngredientsContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-bottom: 80px;
`

const TagContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
`
const Subtitle = styled.small`
    color: var(--ocher-hover, #D1451E);
    font-family: Nunito Sans;
    font-size: 12.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const SelectedIngredients = () => {
    const { selectedIngredients, alternateIngredient } = useContext(IngredientsContext)

    if (!selectedIngredients.length) {
        return null
    }

    return (<>
        <Title>Sua lista:</Title>
        <SelectedIngredientsContainer>

        { selectedIngredients.map(ingredient => 
            <TagContainer key={ingredient.id} onClick={() => alternateIngredient(ingredient)}>
                <TagIngredient ingredient={ingredient} active={true} />
                <Subtitle><img src="/icons/close.png" alt="" /> Remover</Subtitle>
            </TagContainer>
        )}
        </SelectedIngredientsContainer>
    </>)
}

export default SelectedIngredients