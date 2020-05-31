import React from "react";
import FoodItem from "../FoodItem/FoodItem";
import AddFood from "../AddFood/AddFood";
import { SideNavBar } from "../NavBar/NavBar";
import { FridgeShell, Nothingness } from "./styledForRefrigerator";

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
