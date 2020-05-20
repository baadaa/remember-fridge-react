import React from "react";
import styled from "styled-components";
import FoodItem from "../FoodItem/FoodItem";
import AddFood from "../AddFood/AddFood";
import { SideNavBar } from "../NavBar/NavBar";
import emptyFridgeIllo from "../../img/empty-fridge.svg";

const FridgeShell = styled.main`
  background-color: var(--containerBg);
  position: relative;
  max-width: 740px;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 25px 15px 0;
  min-height: calc(100vh - 85px);
  border-radius: 20px 20px 0 0;
  margin: 0 auto 0 0;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  .container {
    max-width: 675px;
    box-sizing: border-box;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-template-rows: 150px;
    grid-auto-flow: row;
    grid-gap: 24px;
    padding-bottom: 40px;
    transition: all 0.3s;
    @media screen and (max-width: 375px) {
      grid-template-columns: repeat(auto-fill, 140px);
      grid-template-rows: 140px;
      grid-gap: 20px;
    }
  }
  @media screen and (max-width: 960px) {
    max-width: 560px;
    .container {
      max-width: 500px;
    }
  }
  @media screen and (max-width: 800px) {
    padding-bottom: 80px;
    margin-left: auto;
  }
  @media screen and (max-width: 570px) {
    max-width: 380px;
    .container {
      max-width: 328px;
    }
  }
  @media screen and (max-width: 375px) {
    max-width: 333px;
  }
  @media screen and (max-width: 335px) {
    .container {
      max-width: 150px;
    }
  }
`;
const Nothing = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  text-align: center;
  width: 100%;
  .illo {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin: 0 auto;
    animation: shake 6s ease infinite;
    background-image: url(${emptyFridgeIllo});
    background-repeat: no-repeat;
    @media screen and (max-width: 335px) {
      width: 150px;
      height: 150px;
    }
  }
  h3 {
    font-weight: 700;
    margin: 20px 0 0;
    opacity: 0.7;
    font-size: 17px;
  }
  p {
    font-size: 15px;
    margin: 6px 0 0;
    opacity: 0.7;
  }
  @keyframes shake {
    0% {
      transform: rotate(5deg);
    }
    2% {
      transform: rotate(-5deg);
    }
    4% {
      transform: rotate(5deg);
    }
    6% {
      transform: rotate(0deg);
    }
    98% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(5deg);
    }
  }
`;
const Nothingness = ({ category }) => (
  <Nothing>
    <div className="illo"></div>
    <h3>Your {category} is empty.</h3>
    <p>Why don't you stock up?</p>
  </Nothing>
);

const Refrigerator = ({
  category,
  openEditor,
  foodItems,
  deleteItem,
  currentSection,
  sectionChange,
  toggleSettings,
  toggleList
}) => {
  const itemsInTheCategory = foodItems
    .filter(food => food.category === category)
    .map((item, i) => (
      <FoodItem
        key={item.id}
        id={item.id}
        img={item.img}
        quantity={item.quantity}
        name={item.name}
        category={item.category}
        added={item.added}
        expires={item.expires}
        deleteThis={deleteItem}
        editThis={openEditor}
      />
    ))
    .reverse();
  const totalItems = itemsInTheCategory.length;
  return (
    <div style={{ position: "relative", display: "flex" }}>
      <FridgeShell>
        <AddFood category={category} click={openEditor} />
        <div className="container">
          {totalItems !== 0 ? (
            itemsInTheCategory
          ) : (
            <Nothingness category={category} />
          )}
        </div>
      </FridgeShell>
      <SideNavBar
        currentSection={currentSection}
        sectionChange={sectionChange}
        toggleSettings={toggleSettings}
        toggleList={toggleList}
      />
    </div>
  );
};

export default Refrigerator;
