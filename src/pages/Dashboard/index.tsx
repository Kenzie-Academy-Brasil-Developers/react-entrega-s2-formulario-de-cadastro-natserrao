import { Header } from "../../components/Header";
import { Section } from "./style";
import { motion } from "framer-motion";
import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { AddModal } from "../../components/AddModal";
import { TechContext } from "../../contexts/TechContext";
import { EditModal } from "../../components/EditModal";

export const Dashboard = () => {
  const { user, techs } = useContext(UserContext);
  const { removeTech, isOpen, setIsOpen, currentTech, setCurrentTech } =
    useContext(TechContext);

  return user ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Section>
        <div className="infoHeader">
          <h2>Tecnologias</h2>
          <button onClick={() => setIsOpen(true)}>
            <FaPlus />
          </button>
        </div>

        <ul>
          {techs.length > 0 &&
            techs.map((tech) => (
              <li key={tech.title}>
                <p onClick={() => setCurrentTech(tech)}>{tech.title}</p>
                <div className="infoLi">
                  <span>{tech.status}</span>
                  <button onClick={() => removeTech(tech.id)}>
                    <BsTrash size={15} />
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </Section>

      {isOpen && <AddModal />}
      {currentTech && <EditModal />}
    </motion.div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
