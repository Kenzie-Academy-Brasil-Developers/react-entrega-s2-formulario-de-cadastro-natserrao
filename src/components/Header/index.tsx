import { Nav, SectionHeader, StyledHeader } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);

  function cleanData() {
    localStorage.clear();
  }

  return (
    <SectionHeader>
      <Nav>
        <h1>Kenzie Hub</h1>
        <Link to="/login">
          <button onClick={cleanData}>Sair</button>
        </Link>
      </Nav>

      <StyledHeader>
        <h2>Olá, {user.name}</h2>
        <span>{user.course_module}</span>
      </StyledHeader>
    </SectionHeader>
  );
};
