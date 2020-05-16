import React from "react";
import styled from "styled-components";

const HeadWrapper = styled.header`
  max-width: 740px;
  margin: 20px auto;
  position: relative;
  text-align: center;
  padding-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 1;
    color: #fff;
    margin: 0;
  }
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    position: absolute;
    border-radius: 45px;
    right: 10px;
    top: 0;
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    max-width: 560px;
  }
  @media screen and (max-width: 800px) {
    padding-left: 0;
  }
  @media screen and (max-width: 570px) {
    max-width: 380px;
  }
  @media screen and (max-width: 375px) {
    max-width: 333px;
  }
`;

const SimpleHeader = ({ user, toggleSettings }) => (
  <HeadWrapper>
    <h1>My Fridge</h1>
    <img role="button" src={user.photo} alt="" onClick={toggleSettings} />
  </HeadWrapper>
);

export default SimpleHeader;
