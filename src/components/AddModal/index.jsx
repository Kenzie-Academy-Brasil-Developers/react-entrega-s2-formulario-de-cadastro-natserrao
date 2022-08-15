import { IoIosCloseCircle } from "react-icons/io";
import { Section } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validators/addTech";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { motion } from "framer-motion";

export const AddModal = () => {
  const { addTech, setIsOpen } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Section>
        <div className="content">
          <div className="infoModal">
            <h3>Cadastrar Tecnologia</h3>
            <button onClick={() => setIsOpen(false)}>
              <IoIosCloseCircle size={20} className="iconClose" />
            </button>
          </div>

          <form onSubmit={handleSubmit(addTech)}>
            <input
              type="text"
              placeholder="Digite aqui a tecnologia"
              {...register("title")}
            />
            {errors.title ? (
              <span className="error">{errors.title.message}</span>
            ) : null}

            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status ? (
              <span className="error">{errors.status.message}</span>
            ) : null}

            <button>Cadastrar Tecnologia</button>
          </form>
        </div>
      </Section>
    </motion.div>
  );
};
