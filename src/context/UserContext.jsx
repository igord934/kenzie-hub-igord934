import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Api from "../services/Api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const token = window.localStorage.getItem("@TOKEN");
      if (token) {
        try {
          Api.defaults.headers.Authorization = `Bearer ${token}`;
          const { data } = await Api.get(`/profile`);
          setUser(data);
          navigate(`/`);
        } catch ({ message }) {
          toast.error("Usuario não encontrado, conecte novamente");
          window.localStorage.clear();
          navigate(`/login`);
        }
        setLoading(false);
      } else {
        navigate(`/login`);
      }
      setLoading(false);
    }
    setLoading(false);
    getUser();
  }, [user, loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
