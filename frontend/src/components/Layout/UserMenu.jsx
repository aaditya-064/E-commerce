import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="py-3 font-bold text-lg">User Panel</p>
      <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <Link to={"/dashboard/user"}>
          <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:bg-gray-500 hover:text-white transition-all dark:border-gray-600">
            Dashboard
          </li>
        </Link>
        <Link to={"/dashboard/user/profile"}>
          <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:bg-gray-500 hover:text-white transition-all dark:border-gray-600">
            Profile
          </li>
        </Link>
        <Link to={"/dashboard/user/orders"}>
          <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-500 hover:text-white transition-all">
            Orders
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default UserMenu;
