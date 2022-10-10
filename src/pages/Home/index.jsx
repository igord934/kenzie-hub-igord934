import { useEffect, useState } from "react";
import Api from "../../services/Api";
import { Button } from "../../style/Button";
import { Headline, Logo, Title } from "../../style/Typograph";
import { Container, Loading } from "./style";

function Home({ navigate, filter, setFilter }) {
  const [user, setUser] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    !token && setFilter("login");
    navigate(`/${filter}`);
    (Api.defaults.headers.Authorization = `Bearer ${token}`),
      Api.get(`/profile`)
        .then((resp) => resp.data)
        .then((resp) => {
          setUser(resp);
          setloading(false);
        })
        .catch((err) => console.log(err));
  }, []);

  function logout() {
    window.localStorage.removeItem("@TOKEN");
    window.localStorage.removeItem("@USERID");
    setFilter("login");
  }

  if (loading) {
    return (
      <Loading>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Loading>
    );
  }

  return (
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
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
