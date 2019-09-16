import React from "react";
import styled from "@emotion/styled";
import FoodItem from "../FoodItem/FoodItem";
import AddFood from "../AddFood/AddFood";
import FoodEditor from "../FoodEditor/FoodEditor";

import { sampleImg, sampleImg2 } from "./SampleImgs";

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

const itemList = [
  {
    id: "a123",
    img: sampleImg,
    quantity: "1",
    name: "된장",
    added: "Mar 20, 2019",
    expires: "Dec 29, 2021"
  },
  {
    id: "bb31",
    img: sampleImg2,
    quantity: "3 cartons",
    name: "된장",
    expires: "Dec 29, 2021"
  },
  {
    id: "c143",
    img: sampleImg,
    name: "A food item with a very long name",
    added: "Mar 20, 2019",
    expires: "Dec 29, 2021"
  },
  {
    id: "d331",
    img: sampleImg2,
    quantity: "5단",
    name: "파",
    added: "Mar 20, 2019",
    expires: "Dec 29, 2021"
  },
  {
    id: "e341",
    img: sampleImg,
    quantity: "53",
    name: "Sausage",
    added: "Mar 20, 2019",
    expires: "Dec 29, 2021"
  }
];
class Refrigerator extends React.Component {
  state = {
    editorOpen: false,
    foodItems: itemList
  };
  addFoodHandler = () => {
    this.setState({ editorOpen: !this.state.editorOpen });
    if (this.state.editorOpen === true) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  };
  deleteItem = item => {
    const filteredList = this.state.foodItems.filter(
      foodItem => foodItem.id !== item.state.id
    );
    this.setState({ foodItems: filteredList });
    // console.log(filteredList);
    // console.log(this.state.foodItems.indexOf(item));
    // console.log(this.state.foodItems);
    // // console.log("hello");
  };
  render() {
    return (
      <React.Fragment>
        <FoodEditor click={this.addFoodHandler} open={this.state.editorOpen} />
        <Container>
          <AddFood click={this.addFoodHandler} />
          {this.state.foodItems.map((item, i) => (
            <FoodItem
              key={item.id}
              id={item.id}
              img={item.img}
              quantity={item.quantity}
              name={item.name}
              added={item.added}
              expires={item.expires}
              deleteThis={this.deleteItem}
            />
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default Refrigerator;