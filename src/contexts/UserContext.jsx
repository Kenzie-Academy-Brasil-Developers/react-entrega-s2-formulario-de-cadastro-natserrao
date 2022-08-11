import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

export const Providers = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();

  function togglePassword() {
    setPasswordShow(!passwordShow);
  }

  function onSubmitLogin(data) {
    api
      .post("/sessions", data)
      .then((res) => {
        const { data } = res;

        if (data) {
          setIsLogged(true);
          setUser(data.user);

          toast.success("Login feito com sucesso!");

          localStorage.setItem("@TOKEN", JSON.stringify(data.token));
          localStorage.setItem("@USERID", JSON.stringify(data.user.id));

          setTimeout(() => {
            navigate("/dashboard", { replace: true });
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

  useEffect(() => {
    const autoLogin = () => {
      let token = localStorage.getItem("@TOKEN");

      if (token) {
        token = token.slice(1, token.length - 1);

        api
          .get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            console.log(res.data);
            const { data } = res;
            setUser(data);
            navigate("/dashboard", { replace: true });
          })
          .catch((err) => {
            console.log(err);
            localStorage.clear();
          });
      }
    };
    autoLogin();
  }, []);

  function onSubmitRegister(data) {
    api
      .post("/users", data)
      .then((res) => {
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
    <UserContext.Provider
      value={{
        onSubmitLogin,
        passwordShow,
        togglePassword,
        onSubmitRegister,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
