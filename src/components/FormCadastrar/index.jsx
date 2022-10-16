import { Button } from "../../style/Button";
import { Title } from "../../style/Typograph";
import { Form, Header } from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../../context/TechContext";

function FormCadastrar() {
  const { setShowModal, creatTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome é obrigatório"),
    status: yup.string().required("Status é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (dataForm) => {
    creatTech(dataForm);
    reset();
  };
  return (
    <>
      <Header>
        <Title typeName="small">Cria sua tech</Title>
        <button onClick={() => setShowModal(false)}>X</button>
      </Header>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>
          <span>Nome</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Digite o nome da tecnologia..."
              {...register("title")}
            />
          </div>
          <p>{errors.title?.message}</p>
        </label>
        <label>
          <span>Selecionar status</span>
          <div className="containerForm">
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <p>{errors.status?.message}</p>
        </label>
        <Button typeName="primary">Cadastrar Tecnologia</Button>
      </Form>
    </>
  );
}

export default FormCadastrar;
