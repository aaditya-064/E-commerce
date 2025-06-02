import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div>
        <div className="flex justify-evenly items-center mt-5">
          <div className="flex-grow">
            <AdminMenu />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col items-center">
              <p className="font-medium text-lg border border-t-0 border-l-0 border-r-0 border-b-gray-950">
                Admin Info
              </p>
              <div className="text-left mt-5">
                <p className="text-md">Name: {auth?.user?.name}</p>
                <p className="text-md">Email: {auth?.user?.email}</p>
                <p className="text-md">Contact: {auth?.user?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
