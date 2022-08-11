import { Header } from "../../components/Header";
import { Main, Section } from "./style";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Section>
        <Main className="main">
          <section>
            <h2>Tecnologias</h2>
            <button>
              <FaPlus />
            </button>
            <ul></ul>
          </section>
        </Main>
      </Section>
    </motion.div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
