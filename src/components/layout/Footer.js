import React from "react";
import Logo from "../../assets/blog.png";

const Footer = () => {
  return (
    <div
      className="page-container "
      style={{ borderTop: "1px solid var(--primary-gray)" }}
    >
      <div className="py-2">
        <img src={Logo} alt="logo" className="h-15 w-15" />
      </div>
    </div>
  );
};

export default Footer;
