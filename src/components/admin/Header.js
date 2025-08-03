import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Hello, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
};

export default Header;
