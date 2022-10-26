import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";
import Api from "../services/Api";
import { UserContext } from "./UserContext";

interface iTechProviderProps {
  children: ReactNode;
}

interface iTechApi {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface iFormTech {
  title: string;
  status: string;
}

interface iTechProvider {
  creatTech(dataForm: iFormTech): void;
  deletTech(id: string): void;
  editTech(id: string, dataForm: iFormTech): void;
  closeModal(): void;
  openModal(): void;
  openModalEdit(tech: iTechApi): void;
  techs: iTechApi[];
  techEdit: iTechApi | null;
  showModal: boolean;
}

export const TechContext = createContext<iTechProvider>({} as iTechProvider);

export function TechProvider({ children }: iTechProviderProps) {
  const { loading, user, loadingTechs } = useContext(UserContext);
  const [techs, setTechs] = useState<iTechApi[]>([]);
  const [techEdit, setTechEdit] = useState<iTechApi | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  function creatTech(dataForm: iFormTech): void {
    Api.post("/users/techs", dataForm);
    closeModal();
  }

  function deletTech(id: string): void {
    Api.delete(`/users/techs/${id}`);
    closeModal();
  }
  function editTech(id: string, dataForm: iFormTech): void {
    Api.put(`/users/techs/${id}`, dataForm);
    closeModal();
  }

  function closeModal(): void {
    setShowModal(false);
    setTechEdit(null);
    loadingTechs();
  }

  function openModal(): void {
    setShowModal(true);
  }

  function openModalEdit(tech: iTechApi): void {
    setShowModal(true);
    setTechEdit(tech);
  }

  useEffect(() => {
    if (user) {
      setTechs(user.techs);
    }
  }, [user]);
  if (loading) {
    return <Loading />;
  }
  return (
    <TechContext.Provider
      value={{
        techs,
        techEdit,
        showModal,
        closeModal,
        openModal,
        openModalEdit,
        creatTech,
        deletTech,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
