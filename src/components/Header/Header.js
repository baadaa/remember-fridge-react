import React from "react";
import listIcon from "../../img/shopping-list.svg";
import styled from "styled-components";
import ColorPalette from "../ColorPalette/ColorPalette";

const HeaderWrapper = styled.header`
  background: ${ColorPalette.$green};
  box-sizing: border-box;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 80px;
  padding-top: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  & > div {
    max-width: 740px;
    padding: 0 10px;
    margin: 0 auto;
    position: relative;
  }
  @media screen and (min-width: 600px) {
    height: 100px;
    padding-top: 20px;
  }
`;
const Header = ({ children }) => (
  <HeaderWrapper>
    <div>{children}</div>
  </HeaderWrapper>
);
const ShoppingList = styled.div`
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  border-radius: 9px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1);
  opacity: 0.6;
  color: #fff;
  position: absolute;
  font-weight: 700;

  img {
    width: 1.3rem;
    height: 1.3rem;
  }

  background-color: darken($green, 10%);

  span.shoppingBtn {
    display: none;
    box-sizing: border-box;
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin-left: 0.6rem;
    margin-right: 0.4rem;
  }

  transition: opacity 0.2s;
  width: 1.3rem;
  height: 1.3rem;
  top: 0;
  left: 10px;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 600px) {
    width: 7rem;
    top: -0.2rem;

    background: {
      position: 5.8rem center;
    }

    span.shoppingBtn {
      display: inline;
    }
  }
`;
const ShoppingListBtn = () => (
  <ShoppingList>
    <span className="shoppingBtn">Shopping List</span>
    <img alt="" src={listIcon} />
  </ShoppingList>
);
const ToggleNav = styled.nav`
  margin-top: 1rem;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-top: 24px;
  }

  display: flex;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + label {
    flex: 0, 0, 50%;
    cursor: pointer;
    transition: 0.2s;
    text-align: center;
    width: 50%;
    font-size: 0.8rem;
    line-height: 1.1rem;
    height: 1.4rem;
    color: #fff;
    padding-top: 0.33rem;
    border-radius: 7px 7px 0 0;
    font-weight: 400;
  }

  input[type="radio"]:checked + label {
    font-weight: 700;
    color: #fff;
    background: darken($green, 2%);
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-bottom: 4px solid #fff;
  }
`;
const NavItem = ({ id, label, change, checked }) => (
  <>
    <input
      type="radio"
      id={id}
      name={id}
      value={id}
      checked={checked}
      onChange={change}
    />
    <label htmlFor={id}>{label}</label>
  </>
);
const HeaderBlock = ({ section, change }) => {
  return (
    <Header>
      <ShoppingListBtn />
      My Fridge
      <ToggleNav>
        <NavItem
          id="fridge"
          checked={section === "fridge"}
          change={change}
          label="Fridge"
        />
        <NavItem
          id="freezer"
          checked={section === "freezer"}
          change={change}
          label="Freezer"
        />
      </ToggleNav>
    </Header>
  );
};

export default HeaderBlock;
