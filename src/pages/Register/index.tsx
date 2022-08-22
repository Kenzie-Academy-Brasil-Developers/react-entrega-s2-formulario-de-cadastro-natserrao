import { Container, Nav, Section, Form } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { formSchema } from "../../validators/registerUser";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { IUserRegister, UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";

export const Register = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
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

          <Form onSubmit={handleSubmit(onSubmitRegister)}>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name ? (
              <span className="error">{errors.name.message}</span>
            ) : null}

            <input
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email ? (
              <span className="error">{errors.email.message}</span>
            ) : null}

            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password ? (
              <span className="error">{errors.password.message}</span>
            ) : null}

            <input
              type="password"
              placeholder="Confirme aqui sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword ? (
              <span className="error">{errors.confirmPassword.message}</span>
            ) : null}

            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio ? (
              <span className="error">{errors.bio.message}</span>
            ) : null}

            <input
              type="tel"
              placeholder=" +99 (99) 99999-9999"
              {...register("contact")}
            />
            {errors.contact ? (
              <span className="error">{errors.contact.message}</span>
            ) : null}

            <select id="module" {...register("course_module")}>
              <option value="Primeiro Módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
            {errors.course_module ? (
              <span className="error">{errors.course_module.message}</span>
            ) : null}

            <button type="submit">Cadastrar</button>
          </Form>
        </Container>
      </Section>
    </motion.div>
  );
};
