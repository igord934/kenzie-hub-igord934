import { Button } from "../../style/Button";
import { Title } from "../../style/Typograph";
import { Form, Header } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { TechContext } from "../../context/TechContext";

interface iFormTech {
  title: string;
  status: string;
}

function FormEditar() {
  const { closeModal, editTech, deletTech, techEdit } = useContext(TechContext);

  const [valueStatus, setValueStatus] = useState("Iniciante");

  const formSchema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormTech>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (dataForm: iFormTech) => {
    if (techEdit !== null) {
      editTech(techEdit.id, dataForm);
      reset();
    }
  };
  return (
    <>
      <Header>
        <Title typeName="small">Edite sua tech</Title>
        <button onClick={closeModal}>X</button>
      </Header>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>
          <span>Nome</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder={techEdit?.title}
              value={techEdit?.title}
              {...register("title")}
            />
          </div>
        </label>
        <label>
          <span>Selecionar status</span>
          <div className="containerForm">
            <select
              {...register("status")}
              onChange={(event) => setValueStatus(event.target.value)}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <p>{errors.status?.message}</p>
        </label>
        <div className="buttons">
          <Button
            typeName={valueStatus !== techEdit?.status ? "primary" : "negative"}
            disabled={valueStatus === techEdit?.status}
          >
            Salvar Alterações
          </Button>
          <Button
            type="button"
            onClick={() => {
              if (techEdit !== null) {
                deletTech(techEdit.id);
              }
            }}
            typeName="grey"
          >
            Excluir
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormEditar;
