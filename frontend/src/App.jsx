import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import { PrivateRoute } from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} Component={HomePage} />
        <Route path={"/about"} Component={About} />
        <Route path="/dashboard" Component={PrivateRoute}>
          <Route path={""} Component={Dashboard} />
        </Route>
        <Route path={"/contact"} Component={Contact} />
        <Route path={"/forgot-password"} Component={ForgotPassword} />
        <Route path={"/*"} Component={PageNotFound} />
        <Route path={"/policy"} Component={Policy} />
        <Route path={"/register"} Component={Register} />
        <Route path={"/login"} Component={Login} />
      </Routes>
    </>
  );
}

export default App;
