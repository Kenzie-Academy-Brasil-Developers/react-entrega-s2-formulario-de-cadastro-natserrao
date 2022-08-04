import { Nav, SectionHeader, StyledHeader } from "./style";

export const Header = () => {
  return (
    <SectionHeader>
      <Nav>
        <h1>Kenzie Hub</h1>
        <button>Sair</button>
      </Nav>

      <StyledHeader>
        <h2>Olá, Natália Serrão</h2>
        <span>Primeiro módulo - Introdução ao Frontend</span>
      </StyledHeader>
    </SectionHeader>
  );
};
