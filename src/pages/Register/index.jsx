import { Container, Nav, Section, Form } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Section>
        <Nav>
          <h1>Kenzie Hub</h1>
          <Link to="/login">
            <button>Voltar</button>
          </Link>
        </Nav>

        <Container>
          <div className="initialInfo">
            <h3>Crie sua conta</h3>
            <p>Rapido e grátis, vamos nessa!</p>
          </div>

          <Form>
            <input type="text" placeholder="Nome:" />
            <input type="email" placeholder="Email:" />
            <input type="password" placeholder="Senha:" />
            <input type="password" placeholder="Confirmar senha:" />
            <input type="text" placeholder="Bio:" />
            <input type="tel" placeholder="Contato:" />

            <select name="module" id="module">
              <option value="primeiro">Primeiro Módulo</option>
              <option value="segundo">Segundo Módulo</option>
              <option value="terceiro">Terceiro Módulo</option>
              <option value="quarto">Quarto Módulo</option>
              <option value="quinto">Quinto Módulo</option>
            </select>

            <button type="submit">Cadastrar</button>
          </Form>
        </Container>
      </Section>
    </motion.div>
  );
};
