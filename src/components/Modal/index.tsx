import { Container } from "./styled";
import FormCadastrar from "../FormCadastrar";
import { TechContext } from "../../context/TechContext";
import { useContext } from "react";
import FormEditar from "../FormEditar";

function Modal() {
  const { showModal, techEdit } = useContext(TechContext);
  if (!showModal) {
    return null;
  }
  return <Container>{techEdit ? <FormEditar /> : <FormCadastrar />}</Container>;
}
export default Modal;
