import { Container, Nav, Section, Form } from "./style";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../../services/api";

import { formSchema } from "../../validators/registerUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { motion } from "framer-motion";
import { toast } from "react-toastify";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  function onSubmit(data) {
    api
      .post("/users", data)
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success("Conta criada com sucesso!");
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 3500);
        }
      })
      .catch((err) => {
        if (err.response.data.status === "error") {
          toast.error("Ops! Algo deu errado");
        }
      });
  }

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

          <Form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nome" {...register("name")} />
            {errors.name ? (
              <span className="error">{errors.name.message}</span>
            ) : null}

            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email ? (
              <span className="error">{errors.email.message}</span>
            ) : null}

            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password ? (
              <span className="error">{errors.password.message}</span>
            ) : null}

            <input
              type="password"
              placeholder="Confirme a senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword ? (
              <span className="error">{errors.confirmPassword.message}</span>
            ) : null}

            <input type="text" placeholder="Bio" {...register("bio")} />
            {errors.bio ? (
              <span className="error">{errors.bio.message}</span>
            ) : null}

            <input
              type="number"
              placeholder="Contato"
              {...register("contact")}
            />
            {errors.contact ? (
              <span className="error">{errors.contact.message}</span>
            ) : null}

            <select name="module" id="module" {...register("course_module")}>
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
