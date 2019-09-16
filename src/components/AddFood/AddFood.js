import React from "react";
import css from "./AddFood.module.scss";

const AddFood = props => (
  <div style={{ width: "100%", margin: "0 auto" }}>
    <button className={css.btn} onClick={props.click}>
      <span className={css.plus}>+</span>
      <span className={css.text}>
        Add an item
        <br />
        to Fridge
      </span>
    </button>
  </div>
);

export default AddFood;
