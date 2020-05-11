import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  max-width: 360px;
  display: flex;
  margin: 0 auto 30px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  padding: 20px 0;
  border-radius: 20px;

  .plus {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    font-size: 30px;
    font-weight: 400;
    border: 1px solid #aaa;
    color: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    flex-grow: 0;
  }

  .text {
    color: #aaa;
    text-align: left;
    flex-basis: 120px;
    line-height: 1.2;
  }
`;

const AddFood = props => (
  <div style={{ width: "100%", margin: "0 auto" }}>
    <Button onClick={props.click}>
      <span className="plus">+</span>
      <span className="text">
        Add an item
        <br />
        to <span style={{ textTransform: "capitalize" }}>{props.category}</span>
      </span>
    </Button>
  </div>
);

export default AddFood;
