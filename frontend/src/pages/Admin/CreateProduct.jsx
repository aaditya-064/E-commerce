import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const CreateProduct = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div>
        <div className="flex justify-evenly items-center mt-5">
          <div className="flex-grow">
            <AdminMenu />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col items-center">
              <p className="font-medium text-lg border border-t-0 border-l-0 border-r-0 border-b-gray-950">
                Create Product
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
