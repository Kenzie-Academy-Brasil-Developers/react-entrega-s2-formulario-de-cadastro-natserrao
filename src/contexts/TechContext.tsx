import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import api from "../services/api";
import { IUser, UserContext } from "./UserContext";
import { toast } from "react-toastify";

interface ITechProvidersProps {
  children: ReactNode;
}

export interface IAddTech {
  title: string;
  status: string;
}

export interface ICurrentTech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface IAddTechResponse {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: Omit<
    IUser,
    "name" | "email" | "course_module" | "bio" | "contact" | "techs" | "works"
  >;
}

interface IRemoveTechResponse {
  data: string;
}

interface IUpdateTechResponse {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ITechContext {
  addTech: (data: IAddTech) => void;
  removeTech: (idTech: string) => void;
  currentTech: ICurrentTech;
  setCurrentTech: Dispatch<SetStateAction<ICurrentTech>>;
  updateTech: (data: ICurrentTech) => void;

  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpenEdit: boolean;
  setIsOpenEdit: Dispatch<SetStateAction<boolean>>;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

export const TechProviders = ({ children }: ITechProvidersProps) => {
  const { setTechs, techs } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [currentTech, setCurrentTech] = useState<ICurrentTech>(null!);

  async function addTech(data: IAddTech) {
    let token = localStorage.getItem("@TOKEN");

    if (token) {
      token = token.slice(1, token.length - 1);
      api.defaults.headers.common["authorization"] = `Bearer ${token}`;

      await api
        .post<IAddTechResponse>("/users/techs", data)
        .then((res) => {
          setTechs([...techs, res.data]);
          toast.success("Tecnologia adicionada!");

          setTimeout(() => {
            setIsOpen(false);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          toast.error("A tecnologia já está na lista!");
        });
    }
  }

  function removeTech(idTech: string) {
    let token = localStorage.getItem("@TOKEN");

    if (token) {
      token = token.slice(1, token.length - 1);
      api.defaults.headers.common["authorization"] = `Bearer ${token}`;

      api
        .delete<IRemoveTechResponse>(`/users/techs/${idTech}`)
        .then((res) => {
          const removed = techs.filter((tech) => tech.id !== idTech);
          setTechs(removed);
          toast.success("Tecnologia removida!");

          setCurrentTech(null!);
        })
        .catch((err) => console.log(err));
    }
  }

  function updateTech(data: ICurrentTech) {
    let token = localStorage.getItem("@TOKEN");

    if (token) {
      const idTech = currentTech.id;
      token = token.slice(1, token.length - 1);

      api.defaults.headers.common["authorization"] = `Bearer ${token}`;

      api
        .put<IUpdateTechResponse>(`users/techs/${idTech}`, data)
        .then((res) => {
          console.log(res);
          const newTechs = techs.map((tech) =>
            tech.id === res.data.id ? res.data : tech
          );
          toast.success("Tecnologia atualizada!");
          setTechs(newTechs);

          setTimeout(() => {
            setCurrentTech(null!);
          }, 900);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <TechContext.Provider
      value={{
        addTech,
        removeTech,
        isOpen,
        setIsOpen,
        isOpenEdit,
        setIsOpenEdit,
        currentTech,
        setCurrentTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
