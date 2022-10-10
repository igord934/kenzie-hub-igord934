import { useEffect, useState } from "react";
import { Container, Form } from "./style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/Api";
import { Button } from "../../style/Button";
import { Logo, Headline, Title } from "../../style/Typograph";

function Login({ navigate, filter, setFilter, toast }) {
  const [password, setPassword] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    token && setFilter("");
    navigate(`/${filter}`);
  }, []);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    Api.post("/sessions", data)
      .then((resp) => resp.data)
      .then((resp) => {
        window.localStorage.setItem("@TOKEN", resp.token);
        window.localStorage.setItem("@USERID", resp.user.id);
        toast.success("Você logou, estamos te redirecionando!");
        setTimeout(() => {
          setFilter("");
        }, 3000);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <Container>
      <Logo>Kenzie Hub</Logo>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Title typeName="big">Login</Title>
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
              type={password ? "text" : "password"}
              placeholder="Digite sua senha..."
              {...register("password")}
            />
            {password ? (
              <FaEyeSlash onClick={() => setPassword(false)} />
            ) : (
              <FaEye onClick={() => setPassword(true)} />
            )}
          </div>
          <p>{errors.password?.message}</p>
        </label>
        <Button typeName="primary">Entrar</Button>
        <div className="toRegister">
          <Headline typeName="bold">Ainda não possui uma conta?</Headline>
          <Button
            type="button"
            typeName="grey"
            onClick={() => setFilter("register")}
          >
            Cadastre-se
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
