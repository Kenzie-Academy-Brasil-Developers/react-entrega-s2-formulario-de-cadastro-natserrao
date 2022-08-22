import { IoIosCloseCircle } from "react-icons/io";
import { Section } from "./style";
import { useContext } from "react";
import { ICurrentTech, TechContext } from "../../contexts/TechContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validators/updateTech";
import { motion } from "framer-motion";

export const EditModal = () => {
  const { currentTech, setCurrentTech, updateTech, removeTech } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICurrentTech>({
    resolver: yupResolver(formSchema),
  });

  function handleSubmitEdit(data: ICurrentTech) {
    updateTech(data);
  }

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
            <h3>Tecnologia Detalhes</h3>
            <button onClick={() => setCurrentTech(null!)}>
              <IoIosCloseCircle size={20} className="iconClose" />
            </button>
          </div>

          <form onSubmit={handleSubmit(handleSubmitEdit)}>
            <input type="text" disabled value={currentTech.title} />

            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status ? (
              <span className="error">{errors.status.message}</span>
            ) : null}

            <div className="btnContainer">
              <button id="btnSalvar" type="submit">
                Salvar Alterações
              </button>
              <button onClick={() => removeTech(currentTech.id)}>
                Excluir
              </button>
            </div>
          </form>
        </div>
      </Section>
    </motion.div>
  );
};
