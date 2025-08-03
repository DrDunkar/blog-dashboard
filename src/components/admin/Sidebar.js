import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside class="w-64 bg-white shadow-md hidden md:block">
      <div class="p-4 text-2xl font-bold border-b">My blog</div>
      <nav class="mt-4 space-y-2 px-4">
        <Link to="/dashboard" class="block py-2 px-3 rounded hover:bg-gray-200">
          Home
        </Link>
        <Link
          to="/dashboard/blog"
          class="block py-2 px-3 rounded hover:bg-gray-200"
        >
          Blog
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
