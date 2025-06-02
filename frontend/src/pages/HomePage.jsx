import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <p>This is home page</p>
      <pre>{JSON.stringify(auth)}</pre>
    </Layout>
  );
};

export default HomePage;
