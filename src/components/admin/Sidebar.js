import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-30 md:w-64 bg-white shadow-md">
      <div className="p-4 text-2xl font-bold border-b">My blog</div>
      <nav className="mt-4 space-y-2 px-4">
        <Link
          to="/dashboard"
          className="block py-2 px-3 rounded hover:bg-gray-200"
        >
          Home
        </Link>
        <Link
          to="/dashboard/blog"
          className="block py-2 px-3 rounded hover:bg-gray-200"
        >
          Blog
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
