import React from "react";
import listIcon from "../../img/shopping-list.svg";
import css from "./Header.module.scss";

const Header = props => {
  return (
    <header className={css.head}>
      <div className={css.innerContainer}>
        <div className={css.shoppingList}>
          <span className={css.shoppingBtn}>Shopping List</span>
          <img alt="" src={listIcon} />
        </div>
        My Fridge
        <nav className={css.toggleNav}>
          <input
            type="radio"
            id="fridge"
            name="fridge"
            value="fridge"
            checked={props.section === "fridge"}
            onChange={props.change}
          />
          <label htmlFor="fridge">Fridge</label>
          <input
            type="radio"
            id="freezer"
            name="freezer"
            value="freezer"
            checked={props.section === "freezer"}
            onChange={props.change}
          />
          <label htmlFor="freezer">Freezer</label>
        </nav>
      </div>
    </header>
  );
};

export default Header;
