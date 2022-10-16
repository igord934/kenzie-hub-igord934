import { useContext } from "react";
import { TechContext } from "../../context/TechContext";
import { AddButton } from "../../style/Button";
import { Headline, Title } from "../../style/Typograph";
import { Container } from "./styled";

function Techs({ techs }) {
  const { setShowModal, setTechEdit } = useContext(TechContext);
  return (
    <Container>
      <div className="header">
        <Title>Tecnologias</Title>
        <AddButton onClick={() => setShowModal(true)}>+</AddButton>
      </div>
      {techs.length > 0 ? (
        <ul>
          {techs.map((tech) => {
            return (
              <li
                key={tech.id}
                onClick={() => {
                  setTechEdit(tech);
                  setShowModal(true);
                }}
              >
                <Title typeName="small">{tech.title}</Title>
                <Headline>{tech.status}</Headline>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="noTechs">
          <Title typeName="big">
            Você não tem nenhuma tecnologia cadastrada :(
          </Title>
          <Headline typeName="italic">
            Click no botão + e cadastre novas tecnologias!
          </Headline>
        </div>
      )}
    </Container>
  );
}
export default Techs;
