import { Header } from "../../components/Header";
import { Main, Section } from "./style";
import { motion } from "framer-motion";

export const Dashboard = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header user={user} />
      <Section>
        <Main className="main">
          <p>Que pena! Estamos em desenvolvimento.</p>
          <span>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </span>
        </Main>
      </Section>
    </motion.div>
  );
};
