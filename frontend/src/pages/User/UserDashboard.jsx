import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="col-span-1">
            <UserMenu />
          </div>
          <div className="col-span-1">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Name: {auth?.user?.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Email: {auth?.user?.email}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Phone: {auth?.user?.phone}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Address: {auth?.user?.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
