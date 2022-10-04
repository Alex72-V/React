import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddContactPage from "../pages/AddContactPage";
import ProtectedRoutes from "./ProtectedRoutes";
import AboutPage from "../pages/AboutPage";
import View from "./View";






function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/about"} element={<AboutPage />} />

        <Route path={"/addContact"} element={<ProtectedRoutes><AddContactPage /></ProtectedRoutes>} />
        <Route path={"/update/:id"} element={<ProtectedRoutes><AddContactPage /></ProtectedRoutes>} />
        <Route path={"/view/:id"} element={<ProtectedRoutes><View /></ProtectedRoutes>} />

      </Route>
    </Routes>
  );
}

export default App;
