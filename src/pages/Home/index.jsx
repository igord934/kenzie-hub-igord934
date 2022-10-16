import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import Techs from "../../components/Techs";
import { TechContext } from "../../context/TechContext";
import { UserContext } from "../../context/UserContext";
import Api from "../../services/Api";
import { Button } from "../../style/Button";
import { Headline, Logo, Title } from "../../style/Typograph";
import { Container } from "./style";

function Home() {
  const { user, setUser, loading } = useContext(UserContext);
  const { techs, showModal, setShowModal } = useContext(TechContext);

  function logout() {
    window.localStorage.removeItem("@TOKEN");
    window.localStorage.removeItem("@USERID");
    setUser(null);
  }

  function creatTech(dataForm) {
    try {
      Api.post("/users/techs", dataForm);
    } catch ({ message }) {
      toast.error(message);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    user && (
      <Container>
        <Modal creatTech={creatTech} />
        <div className="header">
          <Logo>Kenzie Hub</Logo>
          <Button typeName="darkGrey" onClick={logout}>
            Sair
          </Button>
        </div>
        <div className="infos">
          <div>
            <Title typeName="big">Olá, {user.name}</Title>
            <Headline>{user.course_module}</Headline>
          </div>
        </div>
        <Techs techs={techs} setShowModal={setShowModal}></Techs>
      </Container>
    )
  );
}

export default Home;
