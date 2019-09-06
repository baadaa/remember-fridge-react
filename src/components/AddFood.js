import React from "react";
import styled from "@emotion/styled";

const Btn = styled.button`
  width: 280px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
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
class AddFood extends React.Component {
  click = () => {
    this.props.launchEditor();
  };
  render() {
    return (
      <div style={{ width: "100%", margin: "0 auto" }}>
        <Btn onClick={this.click}>
          <span className="plus">+</span>
          <span className="text">
            Add an item
            <br />
            to Fridge
          </span>
        </Btn>
      </div>
    );
  }
}

export default AddFood;
