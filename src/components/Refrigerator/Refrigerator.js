import React from "react";
import styled from "styled-components";
import FoodItem from "../FoodItem/FoodItem";
import AddFood from "../AddFood/AddFood";
import { SideNavBar } from "../NavBar/NavBar";

const FridgeShell = styled.main`
  background: var(--containerBg);
  position: relative;
  max-width: 740px;
  z-index: 1;
  width: 100%;
  // transform: translateX(50px);
  box-sizing: border-box;
  padding: 25px 15px 0;
  min-height: 100vh;
  border-radius: 20px 20px 0 0;
  margin: 0 auto 0 0;
  transition: transform 0.3s;
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

const Refrigerator = props => {
  return (
    <div style={{ position: "relative", display: "flex" }}>
      <FridgeShell>
        <AddFood category={props.category} click={props.openEditor} />
        <div className="container">
          {props.foodItems
            .filter(food => food.category === props.category)
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
                deleteThis={props.deleteItem}
                editThis={props.openEditor}
              />
            ))
            .reverse()}
        </div>
      </FridgeShell>
      <SideNavBar
        currentSection={props.currentSection}
        sectionChange={props.sectionChange}
        toggleSettings={props.toggleSettings}
      />
    </div>
  );
};

export default Refrigerator;
