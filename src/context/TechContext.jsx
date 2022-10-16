import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Api from "../services/Api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { user } = useContext(UserContext);
  const [techs, setTechs] = useState([]);
  const [techEdit, setTechEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function creatTech(dataForm) {
    try {
      Api.post("/users/techs", dataForm);
      setShowModal(false);
      setTechEdit(null);
    } catch ({ message }) {
      toast.error(message);
    }
  }

  function deletTech(id) {
    try {
      Api.delete(`/users/techs/${id}`);
      setShowModal(false);
      setTechEdit(null);
    } catch ({ message }) {
      toast.error(message);
    }
  }
  function editTech(id, dataForm) {
    try {
      Api.put(`/users/techs/${id}`, dataForm);
      setShowModal(false);
      setTechEdit(null);
    } catch ({ message }) {
      toast.error(message);
    }
  }

  useEffect(() => {
    if (user) {
      setTechs(user.techs);
    }
  }, [user]);
  return (
    <TechContext.Provider
      value={{
        techs,
        techEdit,
        setTechEdit,
        showModal,
        setShowModal,
        creatTech,
        deletTech,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
