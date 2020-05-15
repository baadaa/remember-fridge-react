import React from "react";
import styled from "styled-components";
import addIcon from "../../img/add-icon.svg";
const Button = styled.button`
  width: 100%;
  max-width: 320px;
  display: flex;
  margin: 0 auto 30px;
  background: var(--addButton);
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 15px 0;
  border-radius: 50px;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
`;

const AddFood = props => (
  <div style={{ width: "100%", margin: "0 auto" }}>
    <Button onClick={props.click}>
      <img src={addIcon} alt="" style={{ marginRight: "10px" }} />
      Add a new item
    </Button>
  </div>
);

export default AddFood;
