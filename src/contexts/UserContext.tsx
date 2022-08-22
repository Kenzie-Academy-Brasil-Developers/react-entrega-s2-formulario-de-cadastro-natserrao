import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: number;
  course_module: string;
  confirmPassword?: string;
}

interface IUserContext {
  onSubmitLogin: (data: IUserLogin) => void;
  onSubmitRegister: (data: IUserRegister) => void;
  passwordShow: boolean;
  togglePassword: () => void;
  user: IUser;
  techs: ITechs[];
  setTechs: Dispatch<SetStateAction<ITechs[]>>;
}

export interface ITechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: number;
  techs?: ITechs[];
  works?: string[];
  created_at: string;
  updated_at: string;
  avatar_url: null;
}

interface IRegisterResponse {
  data: IUser;
}

interface ILoginResponse {
  token: string;
  user: IUser;
}

interface IAutoLoginResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: number;
  techs?: ITechs[];
  works?: string[];
  created_at: string;
  updated_at: string;
  avatar_url: null;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProviders = ({ children }: IUserProviderProps) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const [user, setUser] = useState<IUser>({} as IUser);
  const [techs, setTechs] = useState<ITechs[]>([]);
  const navigate = useNavigate();

  function togglePassword() {
    setPasswordShow(!passwordShow);
  }

  function onSubmitLogin(data: IUserLogin) {
    api
      .post<ILoginResponse>("/sessions", data)
      .then((res) => {
        const { data } = res;

        if (data) {
          setIsLogged(true);
          setUser(data.user);
          setTechs(data.user.techs!);

          toast.success("Login feito com sucesso!");

          localStorage.setItem("@TOKEN", JSON.stringify(data.token));
          localStorage.setItem("@USERID", JSON.stringify(data.user.id));

          setTimeout(() => {
            navigate("/dashboard", { replace: true });
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  }

  useEffect(() => {
    const autoLogin = () => {
      let token = localStorage.getItem("@TOKEN");

      if (token) {
        token = token.slice(1, token.length - 1);
        api.defaults.headers.common["authorization"] = `Bearer ${token}`;

        api
          .get<IAutoLoginResponse>("/profile")
          .then((res) => {
            setUser(res.data);
            setTechs(res.data.techs!);

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

  function onSubmitRegister(data: IUserRegister) {
    api
      .post<IRegisterResponse>("/users", data)
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
        onSubmitRegister,
        togglePassword,
        setTechs,
        passwordShow,
        user,
        techs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
