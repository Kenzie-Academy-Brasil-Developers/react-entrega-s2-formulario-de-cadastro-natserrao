import { AiFillEye } from "react-icons/ai";
import { Section, Container, Form } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validators/loginUser";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState([]);
  const [passwordShow, setPasswordShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function togglePassword() {
    setPasswordShow(!passwordShow);
  }

  const navigate = useNavigate();
  function onSubmit(data) {
    api
      .post("/sessions", data)
      .then((res) => {
        const { data } = res;
        if (data) {
          setIsLogged(true);
          setUser([...user, data]);

          toast.success("Login feito com sucesso!");

          localStorage.setItem("@TOKEN", JSON.stringify(data.token));
          localStorage.setItem("@USERID", JSON.stringify(data.user.id));

          setTimeout(() => {
            navigate(`/dashboard/${data.user.name}`, { replace: true });
          }, 1500);
        }
      })
      .catch((err) => {
        const { response } = err;
        console.log(response);
        if (response.data.status === "error") {
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
        <h1>Kenzie Hub</h1>

        <Container>
          <h4>Login</h4>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
