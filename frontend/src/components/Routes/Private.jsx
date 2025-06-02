import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../spinner";

export const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios({
        url: `${apiUrl}/api/v1/auth/user-auth`,
        method: "get",
      });
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
};
