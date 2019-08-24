import React from "react";
import styled from "@emotion/styled";
// import Colors from './Colors';

const Foot = styled.footer`
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

  .logout-btn {
    position: fixed;
    right: 1.5rem;
    font-size: 0.5rem;
    color: #bbb;
    cursor: pointer;
  }
`;
const year = new Date().getFullYear;
class Footer extends React.Component {
  render() {
    return (
      <Foot>
        Copyright &copy;{year} Bumhan Yu
        <a href="/" class="logout-btn">
          Logout
        </a>
      </Foot>
    );
  }
}

export default Footer;
