import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Buddy! The page doesn't exist."}>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <p className="font-bold text-9xl">404</p>
        <p className="font-medium text-2xl mt-5">Oopsies! PAGE NOT FOUND</p>
        <Link
          to={"/"}
          className="mt-5 border border-black hover:bg-gray-800 transition-all hover:text-white  px-3 py-2 rounded"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
