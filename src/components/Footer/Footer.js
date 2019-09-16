import React from "react";
import css from "./Footer.module.scss";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className={css.foot}>
    Copyright &copy;{year} Bumhan Yu
    <a href="/" className={css.logoutBtn}>
      Logout
    </a>
  </footer>
);
export default Footer;
