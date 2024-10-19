import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import UserDashboard from "./pages/User/UserDashboard";
import { PrivateRoute } from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { AdminRoute } from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Order from "./pages/User/Order";
import Profile from "./pages/User/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} Component={HomePage} />
        <Route path={"/about"} Component={About} />
        <Route path="/dashboard" Component={PrivateRoute}>
          <Route path={"user"} Component={UserDashboard} />
          <Route path={"user/orders"} Component={Order} />
          <Route path={"user/profile"} Component={Profile} />
        </Route>
        <Route path="/dashboard" Component={AdminRoute}>
          <Route path={"admin"} Component={AdminDashboard} />
          <Route path={"admin/create-category"} Component={CreateCategory} />
          <Route path={"admin/create-product"} Component={CreateProduct} />
          <Route path={"admin/users"} Component={Users} />
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
