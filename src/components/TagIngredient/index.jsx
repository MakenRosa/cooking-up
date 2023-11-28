import { styled } from "styled-components"

const Button = styled.button`
    background: ${props => props.$active ? 'var(--coral, #F0633C)' : 'var(--light-grey, #EFEFEF)'};
    color: ${props => props.$active ? 'var(--cream, #FFFAF3)' : 'var(--grey, #444)'};
    font-weight: ${props => props.$active ? '700' : '400'};
    padding: 8px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    line-height: 150%; 
`

const TagIngredient = ({ ingredient, onClick, active }) => {
    return (<Button $active={active} onClick={onClick}>
        {ingredient.name}
    </Button>)
}

export default TagIngredient