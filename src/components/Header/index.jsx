import { Nav, SectionHeader, StyledHeader } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { motion } from "framer-motion";

export const Header = () => {
  function cleanData() {
    localStorage.clear();
  }

  const [name, setName] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    let userID = localStorage.getItem("@USERID");
    userID = userID.slice(1, userID.length - 1);

    api
      .get(`/users/${userID}`)
      .then((res) => {
        setName(res.data.name);
        setCourse(res.data.course_module);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SectionHeader>
      <Nav>
        <h1>Kenzie Hub</h1>
        <Link to="/login">
          <button onClick={cleanData}>Sair</button>
        </Link>
      </Nav>

      <StyledHeader>
        <h2>Olá, {name}</h2>
        <span>{course}</span>
      </StyledHeader>
    </SectionHeader>
  );
};
