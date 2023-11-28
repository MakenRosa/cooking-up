import { styled } from "styled-components"
import TagIngredient from "../TagIngredient"
import { useContext } from "react"
import { IngredientsContext } from "../IngredientsContext"

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Card = styled.section`
    display: flex;
    padding: 16px 8px;
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
    flex: 1 0 0;
    border-radius: 16px;
    background: var(--white, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);

`
const CardHeader = styled.header`
    text-align: center;
`

const CardBody = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
`

const CardTitle = styled.h4`
    color: var(--medium-green, #3D6D4A);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`

const CardIngredient = ({ category }) => {
    const { alternateIngredient, isIngredientSelected } = useContext(IngredientsContext);
    return (
        <CardContainer>
            <Card>
                <CardHeader>
                    <img src={category.icon} />
                    <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardBody>
                    {category.ingredients
                        .map(ingredient =>
                            <TagIngredient
                                ingredient={ingredient}
                                key={ingredient.id}
                                onClick={() => alternateIngredient(ingredient)}
                                active={isIngredientSelected(ingredient)}
                            />)}
                </CardBody>
            </Card>
        </CardContainer>
    )
}

export default CardIngredient