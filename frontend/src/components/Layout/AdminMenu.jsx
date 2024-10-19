import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center py-3 font-bold text-lg">Admin Panel</p>
      <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <Link to={"/dashboard/admin/create-category"}>
          <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:bg-gray-500 hover:text-white transition-all dark:border-gray-600">
            Create Category
          </li>
        </Link>
        <Link to={"/dashboard/admin/create-product"}>
          <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-500 hover:text-white transition-all">
            Create Product
          </li>
        </Link>
        <Link to={"/dashboard/admin/users"}>
          <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-500 hover:text-white transition-all rounded-b-lg">
            Users
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminMenu;
