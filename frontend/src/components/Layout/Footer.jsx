import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-800 p-4 text-white text-center">
      <p>All Rights Reserved &copy; Aethra</p>
      <div className="flex justify-center gap-4">
        <Link
          to={"/about"}
          className="hover:opacity-80 hover:text-gray-300 transition-all"
        >
          About
        </Link>{" "}
        |
        <Link
          to={"/contact"}
          className="hover:opacity-80 hover:text-gray-300 transition-all"
        >
          {" "}
          Contact
        </Link>{" "}
        |
        <Link
          to={"/policy"}
          className="hover:opacity-80 hover:text-gray-300 transition-all"
        >
          {" "}
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
