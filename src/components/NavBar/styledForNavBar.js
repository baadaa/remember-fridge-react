import styled from "styled-components";

const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  height: 74px;
  right: 0;
  background: var(--navBg);
  color: #fff;
  z-index: 99;
  box-shadow: 0 -4px 9px rgba(0, 0, 0, 0.5);
  transform: translateY(100px);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.3s, opacity 0.3s;
  @media screen and (max-width: 800px) {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
  div {
    display: flex;
    height: 74px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 560px;
    box-sizing: border-box;
    @media screen and (max-width: 570px) {
      max-width: 380px;
    }
  }
  button {
    background: transparent;
    pointer-events: all;
    flex: 1 1 25%;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 700;
    padding: 0;
    display: flex;
    border: 0;
    outline: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    opacity: 0.38;
    transition: opacity 0.3s;
    img {
      margin-top: 5px;
      margin-bottom: 5px;
      pointer-events: none;
    }
    &.active,
    &:focus {
      opacity: 1;
    }
  }
`;
const SideNav = styled.nav`
  order: -1;
  border-radius: 10px 0 0 10px;
  align-self: flex-start;
  background: var(--navBg);
  margin-left: auto;
  margin-top: 40px;
  z-index: 0;
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;
  pointer-events: all;
  width: 100px;
  color: #fff;
  position: sticky;
  top: 10px;
  box-shadow: -2px 3px 9px rgba(0, 0, 0, 0.5);
  button {
    background: transparent;
    pointer-events: all !important;
    flex: 1 1 25%;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 700;
    padding: 0;
    display: flex;
    border: 0;
    outline: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 100%;
    opacity: 0.38;
    transition: opacity 0.3s;
    img {
      margin-top: 5px;
      margin-bottom: 5px;
      pointer-events: none;
    }
    &.active,
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export { SideNav, BottomNav };
