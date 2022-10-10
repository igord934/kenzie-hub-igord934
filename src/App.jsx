import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [filter, setFilter] = useState("login");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${filter}`);
  }, [filter]);
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              navigate={navigate}
              filter={filter}
              setFilter={setFilter}
              toast={toast}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              navigate={navigate}
              filter={filter}
              setFilter={setFilter}
              toast={toast}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              navigate={navigate}
              filter={filter}
              setFilter={setFilter}
              toast={toast}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
