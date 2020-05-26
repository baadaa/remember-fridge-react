import React, { useState, useEffect } from "react";
import styled from "styled-components";

const introSliderHeight = 40;
const Triangle = styled.div`
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  position: absolute;
  border-top: 45px solid var(--navBg);
  border-right: 45px solid transparent;
`;
const Question = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  background: transparent;
  color: #fff;
  line-height: 1;
  border: none;
  width: 50px;
  display: flex;
  height: 50px;
  box-sizing: border-box;
  padding-left: 10px;
  padding-top: 7px;
  font-family: Georgia, serif;
  font-weight: bold;
  font-style: italic;
`;
const IntroBlock = styled.div`
  width: 100vw;
  height: ${introSliderHeight}px;
  background: gray;
  position: absolute;
  top: -${introSliderHeight}px;
  box-sizing: border-box;
  border-bottom: 3px solid var(--bodyBg);
  background: var(--navBg);
  left: 0;
  font-weight: 400;
  font-style: normal;
  box-shadow: inset 0 -2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  padding-left: 10px;
  align-items: center;
  font-size: 12px;
  a {
    color: inherit;
    font-weight: 700;
    text-decoration: none;
    font-family: "Raleway", sans-serif;
    padding-left: 5px;
    transition: color 0.3s;
    &:hover {
      text-decoration: underline;
      color: var(--yellow);
    }
    &::before {
      font-weight: 400;
      display: inline-block;
      color: #fff !important;
    }
    &.copyright::before {
      padding-right: 5px;
      content: "by";
    }
    &.forkme::before {
      padding-right: 5px;
      content: " \u2022  ";
    }
  }
`;
const HeadWrapper = styled.header`
  max-width: 840px;
  margin: 20px auto;
  position: relative;
  text-align: center;
  padding-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
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
    max-width: 660px;
  }
  @media screen and (max-width: 800px) {
    padding-left: 0;
    max-width: 560px;
  }
  @media screen and (max-width: 570px) {
    max-width: 380px;
  }
  @media screen and (max-width: 375px) {
    max-width: 333px;
  }
`;

const SimpleHeader = ({ user, toggleSettings }) => {
  const [introOpen, setIntroOpen] = useState(false);
  useEffect(() => {
    document.body.style.marginTop = introOpen ? `${introSliderHeight}px` : 0;
  });
  return (
    <>
      <Triangle />
      <Question onClick={() => setIntroOpen(!introOpen)}>
        i
        <IntroBlock>
          <span>
            <a
              href="https://basinbald.com"
              target="_blank"
              rel="noopener noreferrer"
              className="copyright"
            >
              Bumhan Yu
            </a>
            <a
              href="https://github.com/baadaa/remember-fridge-react"
              target="_blank"
              rel="noopener noreferrer"
              className="forkme"
            >
              GitHub
            </a>
          </span>
        </IntroBlock>
      </Question>
      <HeadWrapper>
        <h1>My Fridge</h1>
        <img role="button" src={user.photo} alt="" onClick={toggleSettings} />
      </HeadWrapper>
    </>
  );
};

export default SimpleHeader;
