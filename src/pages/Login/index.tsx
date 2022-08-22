import { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { Section, Container, Form } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validators/loginUser";
import { IUserLogin, UserContext } from "../../contexts/UserContext";

export const Login = () => {
  const { onSubmitLogin, passwordShow, togglePassword } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
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
        <h1>Kenzie Hub</h1>

        <Container>
          <h4>Login</h4>
          <Form onSubmit={handleSubmit(onSubmitLogin)}>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email ? (
              <span className="error">{errors.email.message}</span>
            ) : null}

            <div className="password">
              <input
                id="iconInput"
                type={passwordShow ? "text" : "password"}
                placeholder="Senha"
                {...register("password")}
              />
              <AiFillEye id="icon" onClick={togglePassword} />
            </div>
            {errors.password ? (
              <span className="error">{errors.password.message}</span>
            ) : null}

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
