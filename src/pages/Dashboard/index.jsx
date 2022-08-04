import { Header } from "../../components/Header";
import { Main, Section } from "./style";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Section>
        <Main className="main">
          <p>Que pena! Estamos em desenvolvimento.</p>
          <span>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </span>
        </Main>
      </Section>
    </>
  );
};
