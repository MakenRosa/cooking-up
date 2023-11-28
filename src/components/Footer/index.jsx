import { styled } from "styled-components"

const FooterContainer = styled.footer`
    background: var(--dark-green, #263A29);
    padding: 24px 120px;
    color: var(--cream, #FFFAF3);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`

const Footer = () => {
    return (
        <FooterContainer data-testid="footer-container">
            Desenvolvido por Alura | 2023 - Projeto fictício sem fins comerciais.
        </FooterContainer>
    )
}

export default Footer