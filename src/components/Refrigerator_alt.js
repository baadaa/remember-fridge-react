import React from "react";
import styled from "@emotion/styled";
import FoodItem from "./FoodItem_alt";
import AddFood from "./AddFood";
import FoodEditor from "./FoodEditor";

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
    img: sampleImg,
    quantity: "1",
    name: "된장",
    added: "Mar 20, 2019",
    expires: "Dec 29, 2021"
  },
  {
    img: sampleImg2,
    quantity: "3 cartons",
    name: "된장",
    expires: "Dec 29, 2021"
  },
  {
    img: sampleImg,
    name: "A food item with a very long name",
    added: "Mar 20, 2019",
    expires: "Dec 29, 2021"
  },
  {
    img: sampleImg2,
    quantity: "5단",
    name: "파",
    added: "Mar 20, 2019",
    expires: "Dec 29, 2021"
  },
  {
    img: sampleImg,
    quantity: "53",
    name: "Sausage",
    added: "Mar 20, 2019",
    expires: "Dec 29, 2021"
  }
];
class Refrigerator extends React.Component {
  state = {
    editorOpen: true
  };
  addFoodHandler = e => {
    this.setState({ editorOpen: !this.state.editorOpen });
    // console.log("htest");
    console.log(this.state.editorOpen);
    if (this.state.editorOpen === true) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  };
  render() {
    return (
      <React.Fragment>
        <FoodEditor open={this.state.editorOpen} />
        <Container>
          <AddFood launchEditor={this.addFoodHandler} />
          {itemList.map((item, i) => (
            <FoodItem
              key={i}
              img={item.img}
              quantity={item.quantity}
              name={item.name}
              added={item.added}
              expires={item.expires}
            />
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default Refrigerator;
