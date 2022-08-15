import { createContext, useContext, useState } from "react";
import api from "../services/api";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const TechContext = createContext({});

export const TechProviders = ({ children }) => {
  const { user, setUser, setTechs, techs } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [currentTech, setCurrentTech] = useState(null);

  async function addTech(data) {
    let token = localStorage.getItem("@TOKEN");

    if (token) {
      token = token.slice(1, token.length - 1);
      api.defaults.headers.authorization = `Bearer ${token}`;

      await api
        .post("/users/techs", data)
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

  function removeTech(idTech) {
    let token = localStorage.getItem("@TOKEN");

    if (token) {
      token = token.slice(1, token.length - 1);
      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .delete(`/users/techs/${idTech}`)
        .then((res) => {
          const removed = techs.filter((tech) => tech.id !== idTech);
          setTechs(removed);
          toast.success("Tecnologia removida!");

          setCurrentTech(null);
        })
        .catch((err) => console.log(err));
    }
  }

  function updateTech(data) {
    let token = localStorage.getItem("@TOKEN");

    if (token) {
      const idTech = currentTech.id;
      token = token.slice(1, token.length - 1);

      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .put(`users/techs/${idTech}`, data)
        .then((res) => {
          const newTechs = techs.map((tech) =>
            tech.id === res.data.id ? res.data : tech
          );
          toast.success("Tecnologia atualizada!");
          setTechs(newTechs);

          setTimeout(() => {
            setCurrentTech(null);
          }, 900);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <TechContext.Provider
      value={{
        addTech,
        user,
        setUser,
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
