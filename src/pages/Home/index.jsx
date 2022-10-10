import { useEffect, useState } from "react";
import Api from "../../services/Api";
import { Container } from "./style";

function Home({ navigate, filter, setFilter }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    !token && setFilter("login");
    navigate(`/${filter}`);
    Api.get(`/profile`)
      .then((resp) => resp.data)
      .then((resp) => {
        console.log(resp);
        setUser(resp);
      })
      .catch((err) => console.log(err));
  }, []);
  function logout() {
    window.localStorage.removeItem("@TOKEN");
    window.localStorage.removeItem("@USERID");
    setFilter("login");
  }
  return (
    <Container>
      <div className="header">
        <h1 className="logo">Kenzie Hub</h1>
        <button className="button darkGrey" onClick={logout}>
          Sair
        </button>
      </div>
      <div className="infos">
        <div>
          <h2 className="titleBig">Olá, {user.name}</h2>
          <span className="headline">{user.course_module}</span>
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
