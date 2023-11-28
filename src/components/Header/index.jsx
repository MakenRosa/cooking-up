import { styled } from "styled-components"
import Logo from "./Logo"

const StyledHeader = styled.header`

`

const HeaderContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 64px 0;
`

const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

const Heading = styled.h1`
    font-family: Paytone One;
    font-size: 54px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    color: var(--creme, #FFFAF3);
`

const HeadingStrong = styled.strong`
    color: var(--medium-green, #3D6D4A);
    font-weight: 400;
`

const SubHeading = styled.h2`
    color: var(--cream, #FFFAF3);
    font-family: Nunito Sans;
    font-size: 31px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`

const BannerImg = styled.img`
    max-width: 560px;
`


const Header = () => {
    return (
    <StyledHeader>
        <HeaderContainer>
            <HeadingContainer>
                <Logo />
                <Heading>
                    <HeadingStrong>Um banquete de ideias para</HeadingStrong> despertar o chef que há em você!
                </Heading>
                <SubHeading>Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!</SubHeading>
            </HeadingContainer>
            <BannerImg src="/banner.png" alt="" />
        </HeaderContainer>
    </StyledHeader>
    )
}

export default Header