import React, { useState } from "react";
import addIcon from "../../img/added.svg";
import expireIcon from "../../img/expires.svg";
import foodIcon from "../../img/food.svg";
import css from "./FoodItem.module.scss";

const FoodItem2 = props => {
  const [deleteModal, setDeleteModal] = useState(false);
  const deleteThis = () => {
    props.deleteThis(props.id);
  };
  const deleteConfirm = () => {
    setDeleteModal(!deleteModal);
  };
  const cancelModal = () => {
    setDeleteModal(false);
  };
  const name = props.name ? <h2>{props.name}</h2> : "";
  const quantity = props.quantity ? (
    <span className={css.quantity}>{props.quantity}</span>
  ) : (
    ""
  );
  const added = props.added ? (
    <div className={css.dates}>
      <img className={css.addedIcon} src={addIcon} alt="" />
      {props.added}
    </div>
  ) : (
    ""
  );
  const expires = props.expires ? (
    <div className={css.dates}>
      <img className={css.expireIcon} src={expireIcon} alt="" />
      {props.expires}
    </div>
  ) : (
    ""
  );

  return (
    <article className={css.food}>
      <div className={css.flipper} onMouseLeave={cancelModal}>
        <div className={css.front}>
          <img
            className={css.foodImg}
            src={props.img || foodIcon}
            alt={props.name}
          />
          {name}
          {quantity}
        </div>
        <div className={`${css.foodDetail} ${css.back}`}>
          {name}
          {quantity}
          {added}
          {expires}
          <nav className={css.editBtns}>
            <button className={css.edit} onClick={() => props.editThis(props)}>
              Edit
            </button>
            <button className={css.delete} onClick={deleteConfirm}>
              Delete
            </button>
          </nav>
          <div
            className={`${css.deleteConfirm} ${
              deleteModal ? css.deleting : ""
            } `}
          >
            <h4>Delete this item?</h4>
            <h6>{props.name}</h6>
            <div className={css.deleteConfirmBtns}>
              <button className={css.deleteYes} onClick={deleteThis}>
                Yes<span>delete it</span>
              </button>
              <button className={css.deleteNo} onClick={deleteConfirm}>
                No<span>keep it</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FoodItem2;
