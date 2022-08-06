import { Nav, SectionHeader, StyledHeader } from "./style";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Header = () => {
  function cleanData() {
    localStorage.clear();
  }
  const { name } = useParams();
  return (
    <SectionHeader>
      <Nav>
        <h1>Kenzie Hub</h1>
        <Link to="/login">
          <button onClick={cleanData}>Sair</button>
        </Link>
      </Nav>

      <StyledHeader>
        <h2>Olá, {name}</h2>
        <span>curso aqui</span>
      </StyledHeader>
    </SectionHeader>
  );
};
