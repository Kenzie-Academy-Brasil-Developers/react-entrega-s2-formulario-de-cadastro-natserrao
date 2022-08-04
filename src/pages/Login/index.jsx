import { AiFillEye } from "react-icons/ai";
import { Section, Container, Form } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Section>
        <h1>Kenzie Hub</h1>

        <Container>
          <h4>Login</h4>
          <Form>
            <input type="email" placeholder="Email:" />

            <div className="password">
              <input id="iconInput" type="password" placeholder="Senha:" />
              <AiFillEye id="icon" />
            </div>

            <button type="submit">Entrar</button>
          </Form>

          <div className="infoCadastro">
            <span>Ainda não possui uma conta?</span>
            <Link to="/register">
              <button>Cadastre-se</button>
            </Link>
          </div>
        </Container>
      </Section>
    </motion.div>
  );
};
