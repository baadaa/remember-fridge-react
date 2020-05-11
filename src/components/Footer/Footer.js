import React from "react";
import styled from "styled-components";

const year = new Date().getFullYear();

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5rem;
  font-size: 0.8rem;
  line-height: 1.5rem;
  text-align: center;
  background: #999;
  color: #fff;
  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.4);

  a {
    text-decoration: none;
    color: #fff;
  }

  .logoutBtn {
    position: fixed;
    right: 1.5rem;
    font-size: 0.5rem;
    color: #bbb;
    cursor: pointer;
  }
`;

const FooterBlock = () => (
  <Footer>
    Copyright &copy;{year} Bumhan Yu
    <a href="/" className="logoutBtn">
      Logout
    </a>
  </Footer>
);
export default FooterBlock;
