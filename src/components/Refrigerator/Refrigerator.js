import React from "react";
import styled from "styled-components";
import FoodItem from "../FoodItem/FoodItem";
import AddFood from "../AddFood/AddFood";

const Container = styled.main`
  max-width: 740px;
  padding: 0 10px;
  margin: 130px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  &::after {
    content: "";
    flex-basis: 170px;
  }
  @media screen and (max-width: 760px) {
    max-width: 550px;
  }
  @media screen and (max-width: 570px) {
    max-width: 360px;
  }
  @media screen and (max-width: 380px) {
    max-width: 320px;
  }
  @media screen and (max-width: 340px) {
    max-width: 280px;
  }
`;

const Refrigerator = props => (
  <Container>
    <AddFood category={props.category} click={props.openEditor} />
    {props.foodItems
      .filter(food => food.category === props.category)
      .map((item, i) => (
        <FoodItem
          key={item.id}
          id={item.id}
          img={item.img}
          quantity={item.quantity}
          name={item.name}
          added={item.added}
          expires={item.expires}
          deleteThis={props.deleteItem}
          editThis={props.openEditor}
        />
      ))}
  </Container>
);

export default Refrigerator;
