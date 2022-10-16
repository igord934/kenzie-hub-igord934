import { Container, Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/Api";
import { Button, LinkButton as Link } from "../../style/Button";
import { Logo, Title } from "../../style/Typograph";

function Register({ navigate, toast }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .matches(/[A-Z]/, "Deve conter pelo menos uma letra maiuscula")
      .matches(/[a-z]/, "Deve conter pelo menos uma letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos um numero")
      .matches(/(\W)|_/, "Deve conter ao menos um carcter especial")
      .matches(/.{6,}/, "Deve conter no minimo 6 digitos"),
    confrmPassword: yup.string().oneOf([yup.ref("password")]),
    name: yup.string().required("Nome é obrigatório"),
    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string().required("Modulo é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    delete data.confirmPassword;
    Api.post("/users", data)
      .then((resp) => resp.data)
      .then(() => {
        toast.success(
          "Você se registrou, estamos te redirecionando para o login!"
        );
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  function objetoVazio(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  return (
    <Container>
      <div className="header">
        <Logo>Kenzie Hub</Logo>
        <Link to={"/login"}>Voltar</Link>
      </div>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Title typeName="big">Registro</Title>
        <label>
          <span>Email</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Digite seu email..."
              {...register("email")}
            />
          </div>
          <p>{errors.email?.message}</p>
        </label>
        <label>
          <span>Senha</span>
          <div className="containerForm">
            <input
              type="password"
              placeholder="Digite sua senha..."
              {...register("password")}
            />
          </div>
          <p>{errors.password?.message}</p>
        </label>
        <label>
          <span>Confirmar senha</span>
          <div className="containerForm">
            <input
              type="password"
              placeholder="Confime sua senha..."
              {...register("confirmPassword")}
            />
          </div>
          <p>{errors.confirmPassword?.message}</p>
        </label>
        <label>
          <span>Nome</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Digite seu nome..."
              {...register("name")}
            />
          </div>
          <p>{errors.nome?.message}</p>
        </label>
        <label>
          <span>Bio</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Fale sobre você..."
              {...register("bio")}
            />
          </div>
          <p>{errors.bio?.message}</p>
        </label>
        <label>
          <span>Contato</span>
          <div className="containerForm">
            <input
              type="text"
              placeholder="Opção de contato..."
              {...register("contact")}
            />
          </div>
          <p>{errors.contact?.message}</p>
        </label>
        <label>
          <span>Selecionar módulo</span>
          <div className="containerForm">
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo
              </option>
            </select>
          </div>
        </label>
        <Button typeName={!objetoVazio(errors) ? "negative" : "primary"}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
