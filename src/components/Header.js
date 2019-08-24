import React from "react";
import styled from "@emotion/styled";
import Colors from "./Colors";

const Container = styled.header`
  background: ${Colors.$green};
  box-sizing: border-box;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  height: 80px;
  padding-top: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 600px) {
    height: 100px;
    padding-top: 20px;
  }
`;
class Header extends React.Component {
  render() {
    return <Container>My Fridge</Container>;
  }
}

export default Header;
