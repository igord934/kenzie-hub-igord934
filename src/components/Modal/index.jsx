import { Button } from "../../style/Button";
import { Title } from "../../style/Typograph";
import { Container, Form } from "./styled";
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
