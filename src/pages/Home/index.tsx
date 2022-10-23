import { useContext } from "react";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import Techs from "../../components/Techs";
import { TechContext } from "../../context/TechContext";
import { UserContext } from "../../context/UserContext";
import { Button } from "../../style/Button";
import { Headline, Logo, Title } from "../../style/Typograph";
import { Container } from "./style";

function Home() {
  const { user, deleteUser, loading } = useContext(UserContext);
  const { techs } = useContext(TechContext);

  function logout() {
    window.localStorage.removeItem("@TOKEN");
    window.localStorage.removeItem("@USERID");
    deleteUser;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    user && (
      <Container>
        <Modal />
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
        <Techs techs={techs}></Techs>
      </Container>
    )
  );
}

export default Home;
