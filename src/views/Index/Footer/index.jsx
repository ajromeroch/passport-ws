import React from "react";
import Logo from "./logo.jpg";
export default () => {
  return (
    <div className="footer">
      <img src={Logo} alt="" height="100%" />
      <p className="footerContent">This page belongs to Plataforma 5 Coding Bootcamp all rights reserved, January 2020.</p>
      <img src={Logo} alt="" height="100%" className="logo" />
    </div>
  );
};
