import { NavContainer, NavLinkStyled } from "./NavbarStyled"

function Navbar() {
    return (
        <NavContainer>
            <NavLinkStyled to="/">Males do Tabagismo</NavLinkStyled>
            <NavLinkStyled to="/consequencias">Consequências</NavLinkStyled>
            <NavLinkStyled to="/como-parar">Como Parar?</NavLinkStyled>
        </NavContainer>
    )
}

export default Navbar
