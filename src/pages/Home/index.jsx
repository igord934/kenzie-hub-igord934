import { useContext } from "react";
import Loading from "../../components/Loading";
import { UserContext } from "../../context/UserContext";
import { Button } from "../../style/Button";
import { Headline, Logo, Title } from "../../style/Typograph";
import { Container } from "./style";

function Home() {
  const { user, setUser, loading } = useContext(UserContext);

  function logout() {
    window.localStorage.removeItem("@TOKEN");
    window.localStorage.removeItem("@USERID");
    setUser(null);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    user && (
      <Container>
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
        <div className="posts">
          <div>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </div>
      </Container>
    )
  );
}

export default Home;
