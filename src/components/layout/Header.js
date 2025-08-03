import React from "react";
import Logo from "../../assets/blog.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="page-container "
      style={{ borderBottom: "1px solid var(--primary-gray)" }}
    >
      <Link to="/">
        <div className="py-2">
          <img src={Logo} alt="logo" className="h-15 w-15" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
