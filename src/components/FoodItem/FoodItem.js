import React from "react";
import addIcon from "../../img/added.svg";
import closeIcon from "../../img/close.svg";
import expireIcon from "../../img/expires.svg";
import foodIcon from "../../img/food.svg";
import css from "./FoodItem.module.scss";

class FoodItem extends React.Component {
  state = {
    flipped: false,
    deleting: false
  };
  flip = () => {
    this.state.flipped
      ? this.setState({ flipped: false, deleting: false })
      : this.setState({ flipped: true, deleting: false });
  };
  deleteThis = () => {
    this.props.deleteThis(this.props.id);
  };
  deleteConfirm = () => {
    this.state.deleting
      ? this.setState({ deleting: false })
      : this.setState({ deleting: true });
  };
  render() {
    const flipClass = this.state.flipped ? css.flipped : "";

    const name = this.props.name ? <h2>{this.props.name}</h2> : "";
    const quantity = this.props.quantity ? (
      <span className={css.quantity}>{this.props.quantity}</span>
    ) : (
      ""
    );
    const added = this.props.added ? (
      <div className={css.dates}>
        <img className={css.addedIcon} src={addIcon} alt="" />
        {this.props.added}
      </div>
    ) : (
      ""
    );
    const expires = this.props.expires ? (
      <div className={css.dates}>
        <img className={css.expireIcon} src={expireIcon} alt="" />
        {this.props.expires}
      </div>
    ) : (
      ""
    );

    return (
      <article className={`${css.food} ${flipClass}`}>
        <div className={css.flipper}>
          <div className={css.front} onClick={this.flip}>
            <img
              className={css.foodImg}
              src={this.props.img || foodIcon}
              alt={this.props.name}
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
              <button
                className={css.edit}
                onClick={() => this.props.editThis(this)}
              >
                Edit
              </button>
              <button className={css.delete} onClick={this.deleteConfirm}>
                Delete
              </button>
            </nav>
            <img
              src={closeIcon}
              className={css.closeItem}
              onClick={this.flip}
              alt=""
            />
            <div
              className={`${css.deleteConfirm} ${
                this.state.deleting ? css.deleting : ""
              } `}
            >
              <h4>Delete this item?</h4>
              <h6>{this.state.name}</h6>
              <div className={css.deleteConfirmBtns}>
                <button className={css.deleteYes} onClick={this.deleteThis}>
                  Yes<span>delete it</span>
                </button>
                <button className={css.deleteNo} onClick={this.deleteConfirm}>
                  No<span>keep it</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default FoodItem;
