import React from "react";
import Logo from "../../assets/blog.png";
import { Link } from "react-router-dom";
import ThemeToggle from "../ToogleTheme";

const Header = () => {
  return (
    <div
      className="page-container "
      style={{ borderBottom: "1px solid var(--primary-gray)" }}
    >
      <div className="py-2 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-15 w-15" />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
